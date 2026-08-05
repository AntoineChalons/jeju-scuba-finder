
import sqlite3
conn = sqlite3.connect('output/dive_clubs.db')
cur = conn.cursor()

langs = ['English','Chinese','Japanese','Korean']
for l in langs:
    cur.execute("INSERT OR IGNORE INTO languages(language_name) VALUES (?)", (l,))

certs = ['PADI','SSI','CMAS','NAUI']
for c in certs:
    cur.execute("INSERT OR IGNORE INTO certifications(certification_name) VALUES (?)", (c,))

sources = ['Reddit','TripAdvisor','KakaoMap','NaverMap']
for s in sources:
    cur.execute("INSERT OR IGNORE INTO feedback_sources(source_name) VALUES (?)", (s,))

clubs = [
    dict(name='MJ Jeju Diving Club', city='Seogwipo',
         full_address='1F R107, 119-1, Tae-pyeong-ro (Hogeun-dong), Seogwipo-si, Jeju-do',
         gps_lat=33.24451, gps_lng=126.53557,
         website_url='https://mjjejudivingclub.com', naver_map_url='https://map.naver.com/p/search/MJ%20Jeju%20Diving%20Club',
         size='small', num_instructors=2, years_of_existence=None,
         owns_boat=1, tec_diving=0, freediving=0, estimated_price_per_dive_krw=80000,
         languages=['English','Korean'], certs=['PADI'],
         contacts=[('email','gotahunch@gmail.com'),('mobile_phone','+82-10-4464-3216')]),
    dict(name='Nautilus Dive Jeju', city='Seogwipo',
         full_address='693-7 Ieodo-ro, Gangjeong-dong, Seogwipo-si, Jeju-do',
         gps_lat=33.2350265, gps_lng=126.4896897,
         website_url='https://jejuscubadiving.com', naver_map_url='https://map.naver.com/p/search/Nautilus%20Dive%20Jeju',
         size='medium', num_instructors=None, years_of_existence=None,
         owns_boat=1, tec_diving=0, freediving=0, estimated_price_per_dive_krw=None,
         languages=['English','Korean'], certs=['PADI'],
         contacts=[('mobile_phone','+82-10-8756-7856')]),
    dict(name='Sealife SCUBA Center / Dive Resort', city='Seogwipo',
         full_address='775 Seogwi-dong (41 Budu-ro), Seogwipo-si, Jeju-do',
         gps_lat=None, gps_lng=None,
         website_url='http://sealifekorea.com', naver_map_url='https://map.naver.com/p/search/Sealife%20Marine%20Sports',
         size='medium', num_instructors=2, years_of_existence=34,
         owns_boat=1, tec_diving=0, freediving=0, estimated_price_per_dive_krw=80000,
         languages=['English','Korean'], certs=['NAUI','PADI'],
         contacts=[]),
    dict(name='BigBlue33 Diving Center', city='Seogwipo',
         full_address='9, Soam-ro 12beon-gil, Seogwipo-si, Jeju-do',
         gps_lat=None, gps_lng=None,
         website_url='https://bigblue33dive.com', naver_map_url='https://map.naver.com/p/search/BigBlue33%20Diving',
         size='small', num_instructors=None, years_of_existence=None,
         owns_boat=1, tec_diving=0, freediving=0, estimated_price_per_dive_krw=600000,
         languages=['English','Korean'], certs=['PADI'],
         contacts=[('email','bigblue33dive@gmail.com')]),
]

lang_id = {r[0]:r[1] for r in cur.execute("SELECT language_name, language_id FROM languages")}
cert_id = {r[0]:r[1] for r in cur.execute("SELECT certification_name, certification_id FROM certifications")}

for club in clubs:
    cur.execute('''INSERT INTO clubs (name,city,full_address,gps_lat,gps_lng,website_url,naver_map_url,size,
                    num_instructors,years_of_existence,owns_boat,tec_diving,freediving,estimated_price_per_dive_krw)
                    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)''',
                (club['name'],club['city'],club['full_address'],club['gps_lat'],club['gps_lng'],
                 club['website_url'],club['naver_map_url'],club['size'],club['num_instructors'],
                 club['years_of_existence'],club['owns_boat'],club['tec_diving'],club['freediving'],
                 club['estimated_price_per_dive_krw']))
    cid = cur.lastrowid
    for l in club['languages']:
        cur.execute("INSERT INTO club_languages(club_id,language_id) VALUES (?,?)", (cid, lang_id[l]))
    for c in club['certs']:
        cur.execute("INSERT INTO club_certifications(club_id,certification_id) VALUES (?,?)", (cid, cert_id[c]))
    for ctype,cval in club['contacts']:
        cur.execute("INSERT INTO contact_methods(club_id,contact_type,contact_value) VALUES (?,?,?)", (cid,ctype,cval))

conn.commit()

rows = cur.execute("SELECT * FROM v_club_dashboard").fetchall()
cols = [d[0] for d in cur.execute("SELECT * FROM v_club_dashboard").description]
import pandas as pd
df = pd.DataFrame(rows, columns=cols)
df.to_csv('output/jeju_dive_clubs.csv', index=False)
print(df)
