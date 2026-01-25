# 🚀 دليل النشر على سيرفر Contabo

## المتطلبات
- سيرفر Contabo مع Ubuntu/Debian
- Docker و Docker Compose مثبتين
- حساب Cloudflare مع دومين مضاف
- Termius للاتصال بالسيرفر

---

## الخطوة 1: إعداد Cloudflare Tunnel

### 1.1 إنشاء Tunnel في Cloudflare
1. افتح [Cloudflare Zero Trust Dashboard](https://one.dash.cloudflare.com/)
2. اختار **Networks** → **Tunnels**
3. اضغط **Create a tunnel**
4. اختار **Cloudflared**
5. سمّي الـ Tunnel (مثلاً: `dr-nihal-website`)
6. انسخ الـ **Tunnel Token** (هتحتاجه بعدين)

### 1.2 إعداد الـ Public Hostname
1. في صفحة الـ Tunnel، اضغط **Add a public hostname**
2. اختار الـ Subdomain والـ Domain (مثلاً: `nihal.yourdomain.com`)
3. في الـ Service:
   - **Type**: HTTP
   - **URL**: `dr-nihal-website:80`
4. اضغط **Save**

---

## الخطوة 2: رفع الملفات للسيرفر

### 2.1 من Termius
1. افتح Termius واتصل بالسيرفر
2. أنشئ مجلد للمشروع:
```bash
mkdir -p /opt/dr-nihal
cd /opt/dr-nihal
```

### 2.2 رفع الملفات (من جهازك)
ارفع الملفات التالية للسيرفر:
- `out/` (كل المجلد)
- `Dockerfile`
- `nginx.conf`
- `docker-compose.yml`

يمكنك استخدام SFTP في Termius أو الأمر:
```bash
# من جهازك (PowerShell)
scp -r out Dockerfile nginx.conf docker-compose.yml user@your-server-ip:/opt/dr-nihal/
```

---

## الخطوة 3: إعداد الـ Token

### 3.1 إنشاء ملف .env
على السيرفر:
```bash
cd /opt/dr-nihal
nano .env
```

أضف السطر التالي (استبدل بالـ Token الحقيقي):
```
CLOUDFLARE_TUNNEL_TOKEN=eyJhIjoixxxxxxxxxxxxxxxxx
```

اضغط `Ctrl+X` ثم `Y` ثم `Enter` للحفظ.

---

## الخطوة 4: تشغيل الموقع

```bash
cd /opt/dr-nihal

# بناء وتشغيل الـ containers
docker compose up -d --build

# التحقق إن كل شيء شغال
docker compose ps

# مشاهدة الـ logs
docker compose logs -f
```

---

## الخطوة 5: التحقق

1. افتح الدومين في المتصفح (مثلاً: `https://nihal.yourdomain.com`)
2. تأكد إن الموقع شغال والـ HTTPS مفعّل (Cloudflare بيوفره تلقائياً)

---

## أوامر مفيدة

```bash
# إيقاف الموقع
docker compose down

# إعادة التشغيل
docker compose restart

# تحديث الموقع (بعد رفع ملفات جديدة)
docker compose up -d --build

# مشاهدة الـ logs
docker compose logs -f dr-nihal-website
docker compose logs -f cloudflared
```

---

## ملاحظات

- الـ SSL/HTTPS مُقدَّم تلقائياً من Cloudflare
- الـ Tunnel آمن ولا يحتاج فتح ports في الفايروول
- لتحديث الموقع، ارفع مجلد `out` الجديد وأعد بناء الـ container
