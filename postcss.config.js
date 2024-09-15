module.exports = {
  plugins: [
    require("postcss-import"), // برای وارد کردن فایل‌های CSS دیگر به فایل اصلی
    require("postcss-mixins"), // برای استفاده از mixins و کاهش تکرار کد
    require("postcss-nested"), // برای پشتیبانی از قوانین تو در تو
    require("postcss-extend-rule"), // برای پشتیبانی از قوانین extend در CSS
    require("postcss-preset-env"),
    require("tailwindcss"), // برای استفاده از فریمورک Tailwind CSS
    require("postcss-flexbugs-fixes"), // برای اصلاح باگ‌های Flexbox در مرورگرهای مختلف
    require("autoprefixer"), // برای اضافه کردن پیشوندهای مرورگر به ویژگی‌های CSS
  ],
};
