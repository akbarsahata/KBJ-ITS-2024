# KBJ-ITS-2024

Repository proyek untuk kelas Pascasarjana Teknik Informatika semester genap 2024/2025

## Authors

- @akbarsahata
- @adiharka
- @WanMuhafidzFaldi

## Content List

### REST API

Custom REST API yang digunakan untuk men-generate dataset. REST API di-deploy di Paas bernama Vercel, sedangkan database MongoDB menggunakan PaaS bernama MongoDB Atlas.

### Requester Script

Script Postman runner yang digunakan untuk mentrigger REST API dalam men-generate dataset

### Dataset

Dataset yang digunakan untuk men-training model Machine Learning pada project ini dapet ditemui pada file bernama `dataset.json`

## About Project

Banyak REST API yang secara tidak sengaja mengekspos data sensitif melalui endpoint yang kurang aman. Pemeriksaan manual terhadap ribuan endpoint tidak efisien dan sangat rawan kesalahan. Maka dari itu, diperlukan metode otomatis untuk mendeteksi endpoint yang mengekspos data sensitif. 

Maka dari itu diperlukan metode otomatis sehingga pada penelitian kali ini, kami mencoba mengembangkan pendekatan yang lebih canggih menggunakan machine learning yang mampu mendeteksi endpoint API yang mengekspos data sensitif berdasarkan analisis log API dengan memanfaatkan path, header, dan respons.

Memulai groundwork untuk menciptakan alat bantu bagi tim QA dan tim Cyber Security untuk memverifikasi keamanan endpoint API memenuhi serta memastikan kepatuhan terhadap standar regulasi seperti UU PDP. 

## Further Resources

- [Google Collab](https://colab.research.google.com/drive/1HreKAZrolzMK7FqonsNOzitsPojECnFZ?usp=sharing)

- [Critical Literature Review](https://1drv.ms/w/s!AjkidNGp54V6iqdIlo5BHOg_UP4BbQ?e=GLSdWr)

- [Presentation](https://1drv.ms/b/s!AjkidNGp54V6iqdJ3F4sZbTqd4ehHQ?e=sl7hSD)


