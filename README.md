# الروائي - مؤسسة ثقافية وأدبية

موقع إلكتروني لمؤسسة الروائي الثقافية والأدبية.

## المتطلبات الأساسية

- Node.js (الإصدار 14 أو أحدث)
- MongoDB (الإصدار 4.4 أو أحدث)

## إعداد المشروع

1. تثبيت التبعيات:
```bash
npm install
```

2. إنشاء ملف `.env` في المجلد الرئيسي وإضافة المتغيرات التالية:
```
MONGODB_URI=mongodb://localhost:27017/elrewaey
PORT=5000
NODE_ENV=development
```

3. تشغيل الخادم:
```bash
npm run dev
```

## هيكل المشروع

- `public/` - الملفات الثابتة (HTML, CSS, JavaScript)
- `server.js` - ملف الخادم الرئيسي
- `.env` - ملف متغيرات البيئة
- `package.json` - ملف تعريف المشروع والتبعيات

## المميزات

- واجهة مستخدم عربية كاملة
- تصميم متجاوب
- نموذج اتصال
- نظام اشتراك في النشرة البريدية
- قاعدة بيانات MongoDB
- واجهة برمجة التطبيقات (API)

## التطوير

للتطوير المحلي، استخدم الأمر:
```bash
npm run dev
```

سيقوم هذا بتشغيل الخادم في وضع التطوير مع إعادة التحميل التلقائي عند إجراء تغييرات. 