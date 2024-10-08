const password = 'ZIYAD.LH';
const questions = [
    {
        question: "1. ما هو تعريف \"علم النفس\"؟", 
        answers: ["أ) دراسة السلوك والعقل", "ب) دراسة الأجسام", "ج) دراسة الطبيعة", "د) دراسة التاريخ"], 
        correct: 0
    },
    {
        question: "2. ما هو مفهوم \"الشخصية\" في علم النفس؟", 
        answers: ["أ) الخصائص المميزة للفرد", "ب) سلوك الشخص في المجتمع", "ج) علاقات الفرد مع الآخرين", "د) تأثير البيئة على السلوك"], 
        correct: 0
    },
    {
        question: "3. ما هو مفهوم \"الدافع\"؟", 
        answers: ["أ) الحاجة إلى تحقيق شيء", "ب) الرغبة في الهدوء", "ج) التردد في اتخاذ القرارات", "د) الفشل في التواصل"], 
        correct: 0
    },
    {
        question: "4. ما هي المدرسة النفسية التي تركز على السلوك الظاهر؟", 
        answers: ["أ) السلوكية", "ب) التحليل النفسي", "ج) الإنسانية", "د) المعرفية"], 
        correct: 0
    },
    {
        question: "5. من هو مؤسس علم النفس الحديث؟", 
        answers: ["أ) سيغموند فرويد", "ب) ويليام جيمس", "ج) إميل دوركايم", "د) جان بياجيه"], 
        correct: 1
    },
    {
        question: "6. ما هو مفهوم \"الصحة النفسية\"؟", 
        answers: ["أ) الحالة الجيدة للعقل", "ب) عدم وجود مرض نفسي", "ج) الاستقرار العاطفي", "د) جميع ما ذكر"], 
        correct: 3
    },
    {
        question: "7. ما هو مفهوم \"التحليل النفسي\"؟", 
        answers: ["أ) دراسة السلوك الخارجي", "ب) التركيز على العقل الباطن", "ج) تحليل النصوص الأدبية", "د) دراسة العواطف فقط"], 
        correct: 1
    },
    {
        question: "8. ما هو \"الاكتئاب\"؟", 
        answers: ["أ) شعور بالحزن العميق", "ب) شعور بالفرح", "ج) شعور بالقلق", "د) شعور بالاستقرار"], 
        correct: 0
    },
    {
        question: "9. ما هي المرحلة الأولى في النمو النفسي وفقًا لبيان بياجيه؟", 
        answers: ["أ) مرحلة ما قبل العمليات", "ب) مرحلة العمليات الملموسة", "ج) مرحلة العمليات الشكلية", "د) مرحلة النمو الاجتماعي"], 
        correct: 0
    },
    {
        question: "10. ما هو مفهوم \"التكيف\" في علم النفس؟", 
        answers: ["أ) القدرة على التكيف مع البيئة", "ب) الصعوبة في التغيير", "ج) الانعزال عن المجتمع", "د) فقدان الهوية"], 
        correct: 0
    },
    {
        question: "11. ما هو تعريف \"علم النفس الاجتماعي\"؟", 
        answers: ["أ) دراسة سلوك الأفراد في مجموعات", "ب) دراسة الدماغ", "ج) دراسة الأدوية", "د) دراسة الثقافات"], 
        correct: 0
    },
    {
        question: "12. ما هو مفهوم \"الهوية\"؟", 
        answers: ["أ) الصورة الذاتية للفرد", "ب) الشعور بالقلق", "ج) الانفصال عن الآخرين", "د) التركيز على الأهداف"], 
        correct: 0
    },
    {
        question: "13. ما هو \"السلوك العدواني\"؟", 
        answers: ["أ) تصرف يهدف إلى إيذاء الآخرين", "ب) تصرف لطيف", "ج) سلوك متعاون", "د) سلوك محايد"], 
        correct: 0
    },
    {
        question: "14. ما هي مرحلة \"البلوغ\" وفقًا لنظرية إريكسون؟", 
        answers: ["أ) مرحلة الاستكشاف", "ب) مرحلة الصراع", "ج) مرحلة النضج", "د) مرحلة الطفولة"], 
        correct: 2
    },
    {
        question: "15. ما هو تعريف \"التعلم\"؟", 
        answers: ["أ) التغير الدائم في السلوك الناتج عن الخبرة", "ب) اكتساب المعلومات فقط", "ج) ممارسة الرياضة", "د) التحصيل الأكاديمي"], 
        correct: 0
    },
    {
        question: "16. ما هو مفهوم \"التوتر\"؟", 
        answers: ["أ) الضغط النفسي الناتج عن التحديات", "ب) الشعور بالراحة", "ج) الاستقرار النفسي", "د) التواصل الفعال"], 
        correct: 0
    },
    {
        question: "17. ما هو دور \"العلاج النفسي\"؟", 
        answers: ["أ) تحسين الصحة النفسية", "ب) زيادة الضغوط النفسية", "ج) تجاهل المشكلات", "د) عدم وجود فائدة"], 
        correct: 0
    },
    {
        question: "18. ما هو مفهوم \"الإدراك\"؟", 
        answers: ["أ) تفسير المعلومات الحسية", "ب) الفشل في التركيز", "ج) عدم القدرة على التعلم", "د) جميع ما ذكر"], 
        correct: 0
    },
    {
        question: "19. ما هو تعريف \"علم النفس الإكلينيكي\"؟", 
        answers: ["أ) دراسة الاضطرابات النفسية وعلاجها", "ب) دراسة الأدوية فقط", "ج) دراسة الأطفال", "د) دراسة العلاقات الاجتماعية"], 
        correct: 0
    },
    {
        question: "20. ما هو مفهوم \"التطور النفسي\"؟", 
        answers: ["أ) التغير في السلوك على مر الزمن", "ب) الاستقرار النفسي", "ج) عدم التغيير", "د) التغافل عن المشكلات"], 
        correct: 0
    },
    {
        question: "21. ما هو مفهوم \"علم نفس الطفل\"؟", 
        answers: ["أ) دراسة سلوك الأطفال وتطورهم", "ب) دراسة كبار السن", "ج) دراسة البالغين", "د) دراسة الحيوانات"], 
        correct: 0
    },
    {
        question: "22. ما هي فائدة \"التفاعل الاجتماعي\" في نمو الطفل؟", 
        answers: ["أ) تعزيز المهارات الاجتماعية", "ب) زيادة الانعزال", "ج) تقليل التواصل", "د) إهمال الطفل"], 
        correct: 0
    },
    {
        question: "23. ما هو مفهوم \"التنمية العاطفية\"؟", 
        answers: ["أ) تطور المشاعر والتعبير عنها", "ب) عدم الاهتمام بالعواطف", "ج) الحفاظ على السلوكيات السلبية", "د) الإهمال العاطفي"], 
        correct: 0
    },
    {
        question: "24. ما هو تأثير \"التربية\" على نفسية الطفل؟", 
        answers: ["أ) تشكيل الهوية والسلوك", "ب) عدم وجود تأثير", "ج) زيادة القلق", "د) تعزيز الاكتئاب"], 
        correct: 0
    },
    {
        question: "25. ما هو تعريف \"السلوكيات الإيجابية\"؟", 
        answers: ["أ) التصرفات التي تعزز التفاعل الجيد", "ب) السلوكيات العدوانية", "ج) السلوكيات غير الاجتماعية", "د) التهرب من المسؤوليات"], 
        correct: 0
    },
    {
        question: "26. ما هو مفهوم \"الانتباه\"؟", 
        answers: ["أ) القدرة على التركيز على مثير معين", "ب) التشتت الذهني", "ج) الانزعاج", "د) الإهمال"], 
        correct: 0
    },
    {
        question: "27. ما هو تعريف \"القلق\" في علم النفس؟", 
        answers: ["أ) شعور بالتوتر والقلق", "ب) شعور بالاسترخاء", "ج) عدم المبالاة", "د) الشعور بالسعادة"], 
        correct: 0
    },
    {
        question: "28. ما هو مفهوم \"الذكاء العاطفي\"؟", 
        answers: ["أ) القدرة على فهم وإدارة العواطف", "ب) عدم القدرة على التعلم", "ج) الذكاء الرياضي", "د) جميع ما ذكر"], 
        correct: 0
    },
    {
        question: "29. ما هو تأثير \"البيئة\" على سلوك الفرد؟", 
        answers: ["أ) تشكيل القيم والسلوكيات", "ب) عدم وجود تأثير", "ج) زيادة التوتر", "د) تعزيز الانعزال"], 
        correct: 0
    },
    {
        question: "30. ما هو مفهوم \"التأقلم\"؟", 
        answers: ["أ) التكيف مع التغييرات", "ب) عدم القدرة على التغيير", "ج) الاستسلام", "د) تجنب المشكلات"], 
        correct: 0
    },
    {
        question: "31. ما هو تعريف \"السلوك الاجتماعي\"؟", 
        answers: ["أ) تصرفات الأفراد في سياقات اجتماعية", "ب) السلوكيات الفردية فقط", "ج) سلوكيات الحيوانات", "د) عدم الاهتمام بالمجتمع"], 
        correct: 0
    },
    {
        question: "32. ما هو مفهوم \"القدرة على اتخاذ القرار\"؟", 
        answers: ["أ) القدرة على اتخاذ خيارات فعالة", "ب) التردد في اتخاذ القرارات", "ج) عدم الرغبة في الاختيار", "د) فقدان الثقة"], 
        correct: 0
    },
    {
        question: "33. ما هو مفهوم \"التفاعل الاجتماعي\"؟", 
        answers: ["أ) كيفية تفاعل الأفراد في المجتمع", "ب) انعدام التواصل", "ج) الانعزال", "د) عدم التواصل"], 
        correct: 0
    },
    {
        question: "34. ما هو مفهوم \"الاستجابة الشرطية\"؟", 
        answers: ["أ) استجابة تتكون من خلال التعلم", "ب) استجابة طبيعية", "ج) استجابة عشوائية", "د) استجابة غير معروفة"], 
        correct: 0
    },
    {
        question: "35. ما هو تعريف \"التحفيز\" في علم النفس؟", 
        answers: ["أ) المحفزات التي تدفع الشخص للعمل", "ب) عدم وجود دافع", "ج) التقاعس عن العمل", "د) الاستسلام"], 
        correct: 0
    },
    {
        question: "36. ما هو مفهوم \"الضمير\"؟", 
        answers: ["أ) الجانب الأخلاقي في النفس", "ب) عدم الاهتمام بالقيم", "ج) الشعور بالذنب فقط", "د) الانحراف عن القيم"], 
        correct: 0
    },
    {
        question: "37. ما هو تأثير \"الأسرة\" على الصحة النفسية؟", 
        answers: ["أ) تشكيل الهوية والدعم", "ب) عدم التأثير", "ج) زيادة الضغوط", "د) تعزيز الوحدة"], 
        correct: 0
    },
    {
        question: "38. ما هو مفهوم \"الحرمان\"؟", 
        answers: ["أ) فقدان شيء أساسي", "ب) الحصول على كل شيء", "ج) الراحة", "د) الاستقرار"], 
        correct: 0
    },
    {
        question: "39. ما هو تعريف \"الإجهاد النفسي\"؟", 
        answers: ["أ) الضغط الناتج عن الضغوط الحياتية", "ب) الاسترخاء التام", "ج) عدم المبالاة", "د) السعادة العميقة"], 
        correct: 0
    },
    {
        question: "40. ما هو مفهوم \"التحويل\" في التحليل النفسي؟", 
        answers: ["أ) تحويل المشاعر نحو المعالج", "ب) تجاهل المشاعر", "ج) عدم الاهتمام", "د) التقاعس"], 
        correct: 0
    },
    {
        question: "41. ما هو مفهوم \"السلوكيات التكيفية\"؟", 
        answers: ["أ) سلوكيات تساعد على التكيف مع الظروف", "ب) سلوكيات سلبية", "ج) سلوكيات غير اجتماعية", "د) سلوكيات غير معروفة"], 
        correct: 0
    },
    {
        question: "42. ما هو تعريف \"المشاعر\"؟", 
        answers: ["أ) ردود فعل عاطفية", "ب) عدم وجود أحاسيس", "ج) فقط الشعور بالسعادة", "د) الانعزال"], 
        correct: 0
    },
    {
        question: "43. ما هو مفهوم \"الدعم الاجتماعي\"؟", 
        answers: ["أ) المساعدة المقدمة من الآخرين", "ب) العزلة", "ج) فقدان الثقة", "د) عدم التواصل"], 
        correct: 0
    },
    {
        question: "44. ما هو مفهوم \"الصحة النفسية\" في مرحلة الشيخوخة؟", 
        answers: ["أ) القدرة على التكيف مع التغييرات", "ب) الشعور بالانزعاج", "ج) عدم القدرة على التعلم", "د) فقدان الهوية"], 
        correct: 0
    },
    {
        question: "45. ما هو تأثير \"التعليم\" على النفسية؟", 
        answers: ["أ) تعزيز الهوية والمهارات", "ب) عدم التأثير", "ج) زيادة الضغوط", "د) تقليل التواصل"], 
        correct: 0
    },
    {
        question: "46. ما هو تعريف \"الأفكار السلبية\"؟", 
        answers: ["أ) التفكير بشكل يعيق النجاح", "ب) التفكير الإيجابي", "ج) عدم التفكير", "د) جميع ما ذكر"], 
        correct: 0
    },
    {
        question: "47. ما هو مفهوم \"التكيف النفسي\"؟", 
        answers: ["أ) القدرة على التعامل مع المواقف الصعبة", "ب) الانعزال عن المجتمع", "ج) عدم التواصل", "د) الاستسلام"], 
        correct: 0
    },
    {
        question: "48. ما هو تعريف \"الإجهاد العاطفي\"؟", 
        answers: ["أ) الضغط الناتج عن التغيرات العاطفية", "ب) الشعور بالهدوء", "ج) عدم الاهتمام", "د) الشعور بالفرح"], 
        correct: 0
    },
    {
        question: "49. ما هو مفهوم \"المهارات الاجتماعية\"؟", 
        answers: ["أ) القدرة على التفاعل بشكل فعال مع الآخرين", "ب) الانعزال", "ج) عدم التواصل", "د) عدم الرغبة في الاختيار"], 
        correct: 0
    },
    {
        question: "50. ما هو مفهوم \"العلاج السلوكي\"؟", 
        answers: ["أ) تعديل السلوكيات غير المرغوبة", "ب) تجاهل السلوك", "ج) تعزيز السلوك السلبي", "د) جميع ما ذكر"], 
        correct: 0
    },
    {
        question: "51. ما هو تعريف \"الذكاء\" في علم النفس؟", 
        answers: ["أ) القدرة على التعلم وحل المشكلات", "ب) عدم القدرة على التعلم", "ج) عدم التفكير", "د) جميع ما ذكر"], 
        correct: 0
    },
    {
        question: "52. ما هو مفهوم \"الميل إلى المثالية\"؟", 
        answers: ["أ) التوجه نحو تحقيق الكمال", "ب) عدم الرغبة في التحسين", "ج) الاستسلام", "د) عدم الاهتمام بالمستقبل"], 
        correct: 0
    },
    {
        question: "53. ما هو مفهوم \"الالتزام\" في العلاقات؟", 
        answers: ["أ) التزام الأفراد تجاه بعضهم", "ب) عدم الاهتمام", "ج) عدم التواصل", "د) عدم الرغبة في الالتزام"], 
        correct: 0
    },
    {
        question: "54. ما هو تعريف \"الانفصال العاطفي\"؟", 
        answers: ["أ) فقدان الاتصال العاطفي", "ب) تعزيز العلاقات", "ج) التواصل الجيد", "د) جميع ما ذكر"], 
        correct: 0
    },
    {
        question: "55. ما هو مفهوم \"التفكير النقدي\"؟", 
        answers: ["أ) تقييم المعلومات بشكل موضوعي", "ب) التفكير السطحي", "ج) عدم الاهتمام", "د) التركيز على القضايا الشخصية فقط"], 
        correct: 0
    },
    {
        question: "56. ما هو تعريف \"الشعور بالانتماء\"؟", 
        answers: ["أ) الشعور بأنك جزء من مجموعة", "ب) الشعور بالعزلة", "ج) عدم الاهتمام بالآخرين", "د) التركيز على النفس فقط"], 
        correct: 0
    },
    {
        question: "57. ما هو مفهوم \"التحكم الذاتي\"؟", 
        answers: ["أ) القدرة على إدارة العواطف والسلوك", "ب) عدم الرغبة في التحكم", "ج) فقدان السيطرة", "د) جميع ما ذكر"], 
        correct: 0
    },
    {
        question: "58. ما هو تعريف \"السلوكيات المدمرة\"؟", 
        answers: ["أ) تصرفات تؤذي الفرد والآخرين", "ب) تصرفات إيجابية", "ج) سلوكيات غير مؤذية", "د) عدم وجود تأثير"], 
        correct: 0
    },
    {
        question: "59. ما هو مفهوم \"الإحباط\"؟", 
        answers: ["أ) الشعور بعدم القدرة على تحقيق الأهداف", "ب) الشعور بالنجاح", "ج) عدم وجود هدف", "د) الشعور بالراحة"], 
        correct: 0
    },
    {
        question: "60. ما هو مفهوم \"المقارنة الاجتماعية\"؟", 
        answers: ["أ) مقارنة النفس مع الآخرين", "ب) الشعور بالراحة", "ج) عدم التواصل", "د) تجنب التفاعل الاجتماعي"], 
        correct: 0
    },
    {
        question: "61. ما هو مفهوم \"العلاقات الاجتماعية\"؟", 
        answers: ["أ) الروابط بين الأفراد", "ب) العزلة عن المجتمع", "ج) عدم التواصل", "د) عدم وجود روابط"], 
        correct: 0
    },
    {
        question: "62. ما هو تعريف \"القلق\" في علم النفس؟", 
        answers: ["أ) استجابة طبيعية للضغوط", "ب) شعور بالهدوء", "ج) عدم الاهتمام", "د) الاستسلام"], 
        correct: 0
    },
    {
        question: "63. ما هو مفهوم \"الصدمات النفسية\"؟", 
        answers: ["أ) تأثيرات سلبية على النفس بعد حدث مؤلم", "ب) الشعور بالراحة", "ج) عدم التأثير", "د) فقدان الذاكرة"], 
        correct: 0
    },
    {
        question: "64. ما هو تعريف \"الإحباط\"؟", 
        answers: ["أ) مشاعر عدم القدرة على تحقيق الأهداف", "ب) النجاح المستمر", "ج) الشعور بالراحة", "د) جميع ما ذكر"], 
        correct: 0
    },
    {
        question: "65. ما هو مفهوم \"المشاعر المعقدة\"؟", 
        answers: ["أ) مشاعر متعددة في نفس الوقت", "ب) مشاعر بسيطة", "ج) عدم الشعور", "د) عدم الاهتمام بالآخرين"], 
        correct: 0
    },
    {
        question: "66. ما هو تأثير \"البيئة\" على السلوك الإنساني؟", 
        answers: ["أ) تشكيل السلوكيات والقرارات", "ب) عدم التأثير", "ج) تعزيز السلوك السلبي", "د) جميع ما ذكر"], 
        correct: 0
    },
    {
        question: "67. ما هو تعريف \"القلق الاجتماعي\"؟", 
        answers: ["أ) الخوف من التفاعلات الاجتماعية", "ب) الراحة في المواقف الاجتماعية", "ج) عدم الاهتمام بالمواقف الاجتماعية", "د) جميع ما ذكر"], 
        correct: 0
    },
    {
        question: "68. ما هو مفهوم \"الانفصال العاطفي\"؟", 
        answers: ["أ) فقدان الاتصال العاطفي مع الآخرين", "ب) تعزيز العلاقات", "ج) التواصل الجيد", "د) جميع ما ذكر"], 
        correct: 0
    },
    {
        question: "69. ما هو تعريف \"العلاج السلوكي المعرفي\"؟", 
        answers: ["أ) علاج يركز على تعديل السلوكيات والأفكار", "ب) العلاج بالأدوية فقط", "ج) عدم التفاعل", "د) جميع ما ذكر"], 
        correct: 0
    },
    {
        question: "70. ما هو مفهوم \"التفاعل الإيجابي\"؟", 
        answers: ["أ) تعزيز العلاقات الإيجابية بين الأفراد", "ب) الانعزال عن الآخرين", "ج) عدم التواصل", "د) جميع ما ذكر"], 
        correct: 0
    },
    {
        question: "71. ما هو تعريف \"الأزمات النفسية\"؟", 
        answers: ["أ) مواقف ضاغطة تؤثر على الصحة النفسية", "ب) عدم وجود مشاكل", "ج) الشعور بالراحة", "د) جميع ما ذكر"], 
        correct: 0
    },
    {
        question: "72. ما هو مفهوم \"التحكم الذاتي\" في علم النفس؟", 
        answers: ["أ) القدرة على إدارة العواطف والسلوكيات", "ب) عدم الرغبة في التحكم", "ج) فقدان السيطرة", "د) جميع ما ذكر"], 
        correct: 0
    },
    {
        question: "73. ما هو تعريف \"الهوية الشخصية\"؟", 
        answers: ["أ) كيف يرى الفرد نفسه", "ب) عدم وجود هوية", "ج) الانفصال عن المجتمع", "د) عدم التواصل"], 
        correct: 0
    },
    {
        question: "74. ما هو مفهوم \"التقدير الذاتي\"؟", 
        answers: ["أ) كيف يقيم الفرد نفسه", "ب) عدم الاهتمام بالنفس", "ج) عدم الرغبة في التقييم", "د) جميع ما ذكر"], 
        correct: 0
    },
    {
        question: "75. ما هو تأثير \"الضغط النفسي\" على الصحة الجسدية؟", 
        answers: ["أ) يمكن أن يسبب مشكلات صحية", "ب) لا يؤثر على الصحة", "ج) جميع ما ذكر", "د) يعزز الصحة الجسدية"], 
        correct: 0
    },
    {
        question: "76. ما هو مفهوم \"التكيف النفسي\"؟", 
        answers: ["أ) القدرة على التكيف مع الضغوط والتغييرات", "ب) عدم الرغبة في التكيف", "ج) الانعزال عن المجتمع", "د) عدم التواصل"], 
        correct: 0
    },
    {
        question: "77. ما هو تعريف \"الدعم الاجتماعي\"؟", 
        answers: ["أ) المساعدة المقدمة من الأصدقاء والعائلة", "ب) العزلة", "ج) فقدان الثقة", "د) عدم التواصل"], 
        correct: 0
    },
    {
        question: "78. ما هو مفهوم \"الإجهاد النفسي\"؟", 
        answers: ["أ) الضغط الناتج عن التغيرات الحياتية", "ب) الاسترخاء التام", "ج) عدم المبالاة", "د) السعادة العميقة"], 
        correct: 0
    },
    {
        question: "79. ما هو تعريف \"الأفكار المتكررة\"؟", 
        answers: ["أ) التفكير المستمر في موضوع معين", "ب) عدم التفكير", "ج) التفكير الإيجابي", "د) جميع ما ذكر"], 
        correct: 0
    },
    {
        question: "80. ما هو مفهوم \"الصحة النفسية\" في مرحلة المراهقة؟", 
        answers: ["أ) التكيف مع التغيرات الجسدية والعاطفية", "ب) عدم التأثر", "ج) السعادة الدائمة", "د) عدم الرغبة في التواصل"], 
        correct: 0
    },
    {
        question: "81. ما هو تأثير \"الأسرة\" على الصحة النفسية للأطفال؟", 
        answers: ["أ) تشكيل الهوية والدعم", "ب) عدم التأثير", "ج) زيادة الضغوط", "د) تعزيز الوحدة"], 
        correct: 0
    },
    {
        question: "82. ما هو مفهوم \"الاستجابة الانفعالية\"؟", 
        answers: ["أ) رد فعل سريع على المواقف", "ب) التفكير العقلاني", "ج) عدم الاستجابة", "د) جميع ما ذكر"], 
        correct: 0
    },
    {
        question: "83. ما هو تعريف \"التحفيز الخارجي\"؟", 
        answers: ["أ) العوامل الخارجية التي تدفع الفرد للعمل", "ب) عدم وجود دافع", "ج) التقاعس عن العمل", "د) الاستسلام"], 
        correct: 0
    },
    {
        question: "84. ما هو مفهوم \"الاستقلال العاطفي\"؟", 
        answers: ["أ) القدرة على إدارة المشاعر دون الاعتماد على الآخرين", "ب) الاعتماد الكامل على الآخرين", "ج) عدم الرغبة في التواصل", "د) جميع ما ذكر"], 
        correct: 0
    },
    {
        question: "85. ما هو تعريف \"المشاعر الأساسية\"؟", 
        answers: ["أ) المشاعر التي تظهر بشكل طبيعي", "ب) المشاعر غير الطبيعية", "ج) عدم وجود مشاعر", "د) جميع ما ذكر"], 
        correct: 0
    },
    {
        question: "86. ما هو مفهوم \"الإدراك الحسي\"؟", 
        answers: ["أ) كيف يتم تفسير المعلومات الحسية", "ب) عدم التفكير", "ج) السعادة الدائمة", "د) جميع ما ذكر"], 
        correct: 0
    },
    {
        question: "87. ما هو تعريف \"التحكم العاطفي\"؟", 
        answers: ["أ) القدرة على التحكم في المشاعر", "ب) عدم الرغبة في التحكم", "ج) فقدان السيطرة", "د) جميع ما ذكر"], 
        correct: 0
    },
    {
        question: "88. ما هو مفهوم \"العلاقات الرومانسية\"؟", 
        answers: ["أ) العلاقات العاطفية بين الأفراد", "ب) عدم وجود علاقات", "ج) العزلة عن المجتمع", "د) جميع ما ذكر"], 
        correct: 0
    },
    {
        question: "89. ما هو تأثير \"الإجهاد\" على الأداء الأكاديمي؟", 
        answers: ["أ) يمكن أن يؤثر سلبًا على التركيز", "ب) عدم التأثير", "ج) يعزز الأداء", "د) جميع ما ذكر"], 
        correct: 0
    },
    {
        question: "90. ما هو مفهوم \"التوجه نحو النجاح\"؟", 
        answers: ["أ) السعي لتحقيق الأهداف", "ب) الاستسلام", "ج) عدم الرغبة في النجاح", "د) جميع ما ذكر"], 
        correct: 0
    },
    {
        question: "91. ما هو تعريف \"الاكتئاب\" في علم النفس؟", 
        answers: ["أ) حالة من الحزن المستمر وفقدان الأمل", "ب) السعادة العميقة", "ج) الاستسلام", "د) جميع ما ذكر"], 
        correct: 0
    },
    {
        question: "92. ما هو مفهوم \"الصداقة\" في علم النفس الاجتماعي؟", 
        answers: ["أ) علاقة قائمة على الثقة والدعم المتبادل", "ب) عدم التواصل", "ج) العزلة", "د) جميع ما ذكر"], 
        correct: 0
    },
    {
        question: "93. ما هو تعريف \"العلاج الجماعي\"؟", 
        answers: ["أ) علاج يتم في مجموعات", "ب) عدم الرغبة في العلاج", "ج) عدم التواصل", "د) جميع ما ذكر"], 
        correct: 0
    },
    {
        question: "94. ما هو مفهوم \"التقبل الذاتي\"؟", 
        answers: ["أ) قبول النفس كما هي", "ب) عدم الرغبة في القبول", "ج) جميع ما ذكر", "د) الهروب من الواقع"], 
        correct: 0
    },
    {
        question: "95. ما هو تعريف \"التوجه نحو الهدف\"؟", 
        answers: ["أ) السعي لتحقيق الأهداف الشخصية", "ب) عدم وجود أهداف", "ج) الاستسلام", "د) جميع ما ذكر"], 
        correct: 0
    },
    {
        question: "96. ما هو مفهوم \"التحمل العاطفي\"؟", 
        answers: ["أ) القدرة على التعامل مع العواطف الصعبة", "ب) الاستسلام", "ج) عدم الرغبة في التحمل", "د) جميع ما ذكر"], 
        correct: 0
    },
    {
        question: "97. ما هو تعريف \"المرونة النفسية\"؟", 
        answers: ["أ) القدرة على التكيف مع الضغوط والتحديات", "ب) الاستسلام", "ج) عدم الرغبة في التكيف", "د) جميع ما ذكر"], 
        correct: 0
    },
    {
        question: "98. ما هو مفهوم \"التفكير النقدي\"؟", 
        answers: ["أ) القدرة على تحليل المعلومات بموضوعية", "ب) عدم التفكير", "ج) جميع ما ذكر", "د) الاستسلام"], 
        correct: 0
    },
    {
        question: "99. ما هو تعريف \"الأسلوب التفاعلي\"؟", 
        answers: ["أ) الطريقة التي يتفاعل بها الأفراد مع بعضهم", "ب) عدم التفاعل", "ج) الهروب من الواقع", "د) جميع ما ذكر"], 
        correct: 0
    },
    {
        question: "100. ما هو مفهوم \"تقدير الذات\"؟", 
        answers: ["أ) كيف يرى الفرد قيمته الخاصة", "ب) عدم الرغبة في التقدير", "ج) جميع ما ذكر", "د) عدم الاهتمام بالنفس"], 
        correct: 0
    }
];
const welcomeMessages = [
    " مرحباً بك في اختبار علم النفس",
    " أهلاً وسهلاً، نأمل أن تستمتع بالاختبار",
    " زياد يتمنى لك حظاً موفقاً في الاختبار",
    " ابدأ مغامرتك في علم النفس الآن",
    " مرحباً بك، هيا نبدأ تحدي الفلسفة",
    " زياد يتمنى لك التوفيق في اختبارك",
    " المبرمج يحيك بتحياته الحارة ويتمنى لك التوفيق"
];

let currentQuestionIndex = 0;
let score = 0;

document.getElementById("start-btn").addEventListener("click", startQuiz);
document.getElementById("restart-btn").addEventListener("click", restartQuiz);

function startQuiz() {
    const passwordInput = document.getElementById("password").value;
    if (passwordInput === password) {
        document.getElementById("welcome-screen").style.display = "none";
        document.getElementById("name-screen").style.display = "block"; // عرض شاشة الاسم
    } else {
        alert("كلمة السر غير صحيحة!");
    }
}

function showWelcomeMessage() {
    const randomIndex = Math.floor(Math.random() * welcomeMessages.length);
    const welcomeMessage = welcomeMessages[randomIndex];
    document.getElementById("welcome-message").innerText = welcomeMessage;
    document.getElementById("name-screen").style.display = "none"; // إخفاء شاشة الاسم
    document.getElementById("message-screen").style.display = "block"; // عرض شاشة الرسالة الترحيبية
}

function startQuizWithName() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    showWelcomeMessage();
}

function startQuizAfterWelcome() {
    document.getElementById("message-screen").style.display = "none"; // إخفاء شاشة الرسالة الترحيبية
    document.getElementById("quiz-screen").style.display = "block"; // إظهار شاشة الاختبار
    showQuestion(); // عرض السؤال الأول
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;

    const answersContainer = document.getElementById("answers");
    answersContainer.innerHTML = "";

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.classList.add("answer-btn");
        button.addEventListener("click", () => selectAnswer(index));
        answersContainer.appendChild(button);
    });
}

function selectAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz-screen").style.display = "none";
    document.getElementById("result-screen").style.display = "block";
    document.getElementById("result-message").innerText = `لقد أجبت بشكل صحيح على ${score} من ${questions.length} أسئلة.`;
    document.getElementById("back-btn").addEventListener("click", () => {
        window.location.href = "https://sites.google.com/view/takadom"; // استبدل برابط الصفحة الخارجية
    });
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("result-screen").style.display = "none";
    document.getElementById("welcome-screen").style.display = "block";
    document.getElementById("password").value = "";
}
