import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Grid from '@material-ui/core/Grid';
import Footer from "../footer/Footer";
import {Container, Paper} from "@material-ui/core";
import Preview from "../Preview/Preview";
import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import clsx from "clsx";
import DrawerRight from "../Drawer/DrawerRight";
import {useStyles} from "./Style";
import classNames from "classnames";
import Artists from "../artists/Artists";

export const posts = [
    {
        id: 1,
        title: "نگو نمیشه",
        author: "عباس قادری",
        id_Artist: 7,
        address: "http://dl.itarane.com/dl/music/album/226/Abbas%20Ghaderi%20-%20%27Nagoo%20Nemisheh%27%20MP3%20-%20.MP3",
        image: "https://itarane.com/wp-content/uploads/2019/07/4e2a354d1582620-original-larger-300x225.jpg",
        description: "دوست دارم عاشقتم نه نه نگو نمیشه عزیزم\n" +
            "عاشق اون لوندیات نه نه نگو نمیشه عزیزم\n" +
            "فکر وفاداری بکن نگو نمیشه عزیزم\n" +
            "هرچی بخوای به پات میدم نگو نمیشه عزیزم",
        star: 3
    },
    {
        id: 2,
        title: "کاروان",
        author: "معین",
        id_Artist: 2,
        address: "/audio/Karevan.mp3",
        image: "https://malltin.com/wp-content/uploads/2021/11/moein.jpg",
        description: "*" +
            "*" +
            "*" +
            "*",
        star: 2
    },
    {
        id: 3,
        title: "یه موقع هایی هست 2",
        author: "شایع",
        id_Artist: 4,
        address: "https://serverdl.mediahits.ir/1400-06/Shayea%20-%20Ye%20Moghehaei%202%20%28Ft%20Mahyar%29.mp3",
        image: "https://mediahits.ir/wp-content/uploads/2021/09/ye-moghe-haei-400x400.jpg",
        description: "یه موقع هایی هست که حالِ هیچی نی\n" +
            "مِثِ من هر روز به ساقیا رسید میدی\n" +
            "دیگه نه جایی با اکیپ میری\n" +
            "نه دیگه با کسی تیم میشی، نیس چیزی\n" +
            "بتونه ذوق بندازه تووت\n" +
            "هر جا میری دَووم میاری یه ماه به زور\n" +
            "زندگی بدونِ احساس خوب\n" +
            "تکرارِ شب ، تکرارِ روز\n" + "این که این تنهایی جایِ کی توشه ؟",
        star: 4
    },
    {
        id: 4,
        title: "نمیدونی چقد دلم میخواد2",
        author: "شایع",
        id_Artist: 4,
        address: "https://dl.pmcmusic.tv/1398/07/Shayea%20-%20Injaneb%20[128]/08.%20Nemidooni%20Cheghad%20Delam%20Mikhad%20%28Ft%20Minoram%29.mp3",
        image: "https://pmcmusic.tv/wp-content/uploads/2022/08/shayea-nemidooni-cheghad-delam-mikhad-1.jpg",
        description: "♬♪♫♪… متن ترانه …♬♪♫♪\n" +
            "\n" +
            "نمیدونی چقد دلم میخواد…♬♪♫♪\n" +
            "\n" +
            "یه روز بدون این که به کسی بگم برم…♬♪♫♪\n" +
            "\n" +
            "همه دنبالم بگردن در به در…♬♪♫♪\n" +
            "\n" +
            "انقدر که اگه یه روز دیدنم جرم بدن…♬♪♫♪\n" +
            "\n" +
            "فقط یه بار ملاحظه نکنم…♬♪♫♪\n" +
            "\n" +
            "همین، مامان نگه نیستی اما هنوز بچمی…♬♪♫♪\n" +
            "\n" +
            "برا ما که تازه خوابمون ده شب پرید…♬♪♫♪\n" +
            "\n" +
            "یه دلیل بیار راهو با بار کج نریم…♬♪♫♪\n" ,
        star: 1
    },
    {
        id: 5,
        title: "پرنده",
        author: "سینا درخشنده",
        id_Artist: 5,
        address: "https://irsv.upmusics.com/Downloads/Musics/Sina%20Derakhshande%20%7C%20Parandeh%20demo%20(320).mp3?_=1",
        image: "https://upmusics.com/wp-content/uploads/2019/09/68783794_127411685220105_3478340904989370029_n.jpg",
        description: "───┤ ♩♬♫♪♭ ├─── \n" +
            "\n" +
            "متن ترانه :\n" +
            "\n" +
            "وای از دست آدما چه بی رحمن بگو چرا!!!\n" +
            "شکسته بی تو قایقم چرا نمیکنی نگام ♫♪♭\n" +
            "زخمیه بال و پرم از توام خسته ترم غریبم!!!\n" +
            "خدا یه کاری بکن بال پرنده نشکنه ♫♪♭",
        star: 5
    },
    {
        id: 6,
        title: "پستچی2",
        author: "چاوشی",
        id_Artist: 1,
        address: "https://irsv.upmusics.com/AliBZ/Mohsen%20Chavoshi%20-%20Postchi%20(128).mp3",
        image: "https://upmusics.com/wp-content/uploads/2022/06/gf.jpg",
        description: "───┤ ♩♬♫♪♭ ├───\n" +
            "\n" +
            "منی که کل عمرمو پی کسی نرفتم و پی کسی نیومدم♬♫\n" +
            "پشت سر قطار تو مث یه پستچی خیس فقط رکاب میزدم\n" +
            "شب بلند بدرقه شب همیشه رو سیاه شبی عمیق مثل آه♬♫\n" +
            "خودم سقوط کردمو رسوندمت رسوندمت رسوندمت به پرتگاه\n" +
            "هزار سال دیگه ام غمت تموم باغچه رو یه شوره زار میکنه♬♫",
        star: 2
    },
    {
        id: 7,
        title: " یاد چشم تو می افتم",
        author: "چاوشی",
        id_Artist: 1,
        address: "https://irsv.upmusics.com/AliBZ/Mohsen%20Chavoshi%20-%20Yade%20Cheshme%20To%20Mioftam(128).mp3",
        image: "https://upmusics.com/wp-content/uploads/2022/07/Mohsen-Chavoshi-Yade-Cheshme-To-Mioftam.jpg",
        description: "───┤ ♩♬♫♪♭ ├───\n" +
            "\n" +
            "لخته لخته لخته خون میچکه از جون و تنم♬♫\n" +
            "شعلع شعله شعله ور شد همه جای بدنم\n" +
            "بس که پامال ستم شد دل وامونده ی من♬♫\n" +
            "مث بازوی تک خورده کبوده کفنم\n" +
            "آخ چرا دل به جگر گوشه ی مردم بستم♬♫\n" +
            "آخ چرا دل به جگر گوشه ی مردم دادم\n" +
            "یاد چشم تو میوفتم جگرم میسوزه♬♫\n" +
            "یاد چشم تو میوفتم نفسم میگیره\n" +
            "نفس من که هلاک نفساتن ♬♫",
        star: 3
    },
    {
        id: 8,
        title: "کوک حالم",
        author: "سینا درخشنده",
        id_Artist: 5,
        address: "https://irsv.upmusics.com/Tracks/Songs/Sina%20Derakhshande%20-%20Kooke%20Halam%20128(UpMusic).mp3",
        image: "https://upmusics.com/wp-content/uploads/2018/01/Sina-Derakhshande-Kooke-Halam.jpg",
        description: "اینجوری که من آخه دلمو دادم برا تو اینجوری دلم داره هی میکنه هواتو\n" +
            "عاشقت شدم کسی ام نمیاد به جا تو توی دل من آخه حک شد اون چشاتو\n" +
            "کوک کوکه حالم آخه عشقه تو دست و بالم دل تو رو میخواد میگن شده خوش به حالم\n" +
            "♪♪♫♫♪♪♯ شعر : سینا درخشنده ♪♪♫♫♪♪♯\n" +
            "شوخی که ندارم عشق شوخی سرش نمیشه جوری تورو میخوام هیشکی باورش نمیشه\n" ,
        star: 3
    },
    {
        id: 9,
        title: "اهنگ تو قهرمان زندگیم شدی",
        author: "احمد سلو",
        id_Artist: 6,
        address: "https://irsv.upmusics.com/99/Ahmad%20Solo%20%7C%20Ghahreman%20(128).mp3",
        image: "https://upmusics.com/wp-content/uploads/2021/07/kyu.jpg",
        description: "معشوق من باش تو محبوب من باش قشنگ ترین دغدغه هر روز من باش ♬♫♪\n" +
            "تو عین آدما فقط محدود به من باش معبود من باش ..!!..\n" +
            "تو ماه من باش بیا بیا تو مالکم باش دلو سپردم به خودت مراقبم باش ♬♫♪\n" +
            "زیبا ترین ترانه با من صدای من خدای من باش ..!!..\n" ,
        star: 2
    },
    {
        id: 10,
        title: " برو آنجا",
        author: "شجریان",
        id_Artist: 8,
        address: "https://irsv.upmusics.com/AliBZ/Mohammadreza%20Shajarian%20-%20Boro%20Anja%20(320).mp3",
        image: "https://upmusics.com/wp-content/uploads/2022/06/cvbqe.jpg",
        description: "قاصدک هان چه خبر آوردي♬♫♪\n" +
            "قاصدک هان چه خبر آوردي\n" +
            "از کجا وز که خبر آوردي♬♫♪\n" +
            "خوش خبر باشي اما اما\n" +
            "خوش خبر باشي اما اما♬♫♪",
        star: 4
    },
    {
        id: 11,
        title: "ایران ای سرای امید",
        author: "شجریان",
        id_Artist: 8,
        address: "https://irsv.upmusics.com/Up-Song/MohammadReza%20Shajryan%20%E2%80%93%20Iran%20Ey%20Saraye%20Omid%20(128).mp3",
        image: "https://upmusics.com/wp-content/uploads/2020/01/hre.jpg",
        description: "قسمتی از متن ترانه : \n" +
            "\n" +
            "ایران ای سرای امید بر بامت سپیده دمید ♫♪♭\n" +
            "بنگر کزین ره پر خون خورشیدی خجسته رسید !!!\n" +
            "ایران ای سرای امید بر بامت سپیده دمید ♫♪♭\n" +
            "بنگر کزین ره پر خون خورشیدی خجسته رسید !!!\n",
        star: 5
    },
]

const profile= [
    {
        id: 1,
        name: "محسن چاوشی",
        image: "https://music-fa.com/wp-content/uploads/2022/04/Mohsen-Chavoshi-Bazare-Khoramshahr-Music-fa.com_.jpg",
        data: "محسن چاوشی زادهٔ خرمشهر است و اصالتی کُردتبار دارد.[۷] خانواده وی با توجه به شرایط کاری که پدرش به عنوان کارمند شرکت نفت داشت به خرمشهر مهاجرت کردند و محسن در خرمشهر متولد شد. وی فرزند پنجم خانواده و دارای دو خواهر و سه برادر (مهراد، فرهاد و هوشنگ) است.[۸] بعد از اشغال خرمشهر در زمان جنگ، خانواده او به شهرهای کرمانشاه، مشهد (ساکن شهرک عربهای مشهد) و نهایتاً تهران مهاجرت کردند. او در سال ۱۳۸۸، با اسپاکو یوسفی ازدواج کرد و در سال ۱۳۹۲ صاحب فرزندی پسر به نام زانکو شد"
    },
    {
        id: 2,
        name: "معین",
        image: "https://malltin.com/wp-content/uploads/2021/11/moein.jpg",
        data: "نصرالله معین نجف‌آبادی (زادهٔ ۲۹ دی ۱۳۳۰) که با نام هنری معین شناخته می‌شود، خوانندهٔ موسیقی پاپ و سنتی ایرانی ساکن لس‌آنجلس است. او از ۱۸ سالگی فعالیت خود را در موسیقی و آواز آغاز کرد و مدتی نیز از آموزش‌های هنرمندانی چون تاج اصفهانی و حسن کسایی بهره برد. نخستین ترانه رسمی او، قطعه‌ای به نام «یکی را دوست می‌دارم» بود که در سال ۱۳۵۷ انتشار یافت و سبب شهرت او شد. معین پس از وقوع انقلاب اسلامی ۱۳۵۷ ایران و در نتیجهٔ اعمال محدودیت‌هایی بر روی فعالان عرصهٔ موسیقی، به ایالات متحده آمریکا مهاجرت کرد و در آنجا فعالیت خود را با انتشار نخستین آلبوم رسمی خود به نام «می‌پرستم» پی گرفت. عموم آثار شنیدهٔ شده از معین، حاصل همکاری‌های او با دیگر هنرمندان مهاجر ایرانی است. او در کارنامهٔ هنری خود، ۲۶ آلبوم رسمی ثبت کرده‌است که آخرین آن، «ماندگار» نام دارد و در سال ۱۳۹۸ منتشر شد. معین تاکنون برنامه‌های متعددی در تالارهای مطرح جهان از جمله «تالار یونیورسال» وتالار روباز «گریک تئاتر» لس آنجلس، و «خانهٔ اوپرا دبی» اجرا کرده‌است.وی در رشته موسیقی تحصیل کرده ست"
    },
    {
        id: 3,
        name: "میثم ابراهیمی",
        image: "https://sevilmusic.com/wp-content/uploads/2021/09/Meysam-Ebrahimi-Yeki-Bashe.jpg",
        data: "میثم ابراهیمی متولد ۸ شهریور ۱۳۶۴ در تهران، خواننده است. در رشته موسیقی فوق دیپلم و در رشته مدیریت فرهنگی لیسانس دارد می گوید از کودکی می خواندم، یادم است در گروه های سرود عضو بودم، گروه سرود تواشیح و گاهی هم در هیئت ها می خواندم آن موقع کلاس موسیقی به صورت الان نبود زیاد هم به موسیقی بها داده نمیشد"
    },
    {
        id: 4,
        name: "محمد رضا شایع",
        image: "https://photokade.com/wp-content/uploads/shayea-photokade-com-1.jpg",
        data: "محمدرضا شایع خواننده رپ متولد 9 مرداد سال 1372 در محله شاه عبدالعظیم شهر تهران است. او پس از ورود به دانشگاه و به دلیل مشغله زیادی که داشت مجبور شد ترک تحصیل کند و موسیقی را ادامه دهد.\n" +
            "\n" +
            "او مانند یاسر بختیاری، آهنگ های اجتماعی زیادی خوانده است و با خوانندگان مشهور ایرانی از جمله یاسین ترکی همکاری داشته است. از جمله فعالیت های او می توان به همخوانی در کنار آرتیست هایی همچون حصین، تی دی، نیموش ، کنیس اشاره کرد."
    },
    {
        id: 5,
        name: "سینا درخشنده",
        image: "https://namnamak.com/images/up/127/828.jpg",
        data: "سینا درخشنده متولد 31 شهریور 1371 در شیراز، خواننده است\n" +
            "\n" +
            " \n" +
            "\n" +
            "فارغ التحصیل لیسانس رشته عمران می باشد نوازنده قابلی است، شعر نیز می سراید و حالا عنوان پدیده موسیقی ایران در عرصه خوانندگی را یدک می کشد\n" +
            "\n" +
            " \n" +
            "\n" +
            "نام اصلی اش رضا در شناسنامه است"
    },
    {
        id: 6,
        name: "احمد سلو",
        image: "https://www.starbino.com/wp-content/uploads/2018/07/Ahmad-Solo-Chera-Bargashti.jpg",
        date: "احمد سلو کار آهنگسازی را از سال ۱۳۸۴ به صورت آکادمیک یاد گرفت و از سال ۱۳۸۶ کار حرفه ای را در مورد آهنگسازی و تنظیم شروع کرد. او در این مدت کار آهنگسازی و تنظیم را برای خوانندگان مختلف انجام می داد تا اینکه در سال ۱۳۸۸ خودش به خوانندگی علاقه پیدا کرد و به دلیل صدای خوبی که داشت، ساخت موزیک برای خودش را شروع کرد."
    },
    {
        id: 7,
        name: "عباس قادری",
        image: "https://www.parsnaz.com/images/2014/09/1110731759-parsnaz-ir.jpg",
        data: "عباس قادری (زادهٔ ۲ تیرماه ۱۳۲۶ در تهران) خوانندهٔ ایرانی در سبک موسیقی کوچه‌بازاری است. او در سال‌های آغازینِ دههٔ ۱۳۵۰ با اجرای ترانه‌های «بدنام» و «زیارت» (زوار) به شهرت رسیده است.[۱]\n" +
            "\n" +
            "شروع فعالیت\n" +
            "در دوران طفولیت شروع به انجام فعالیت‌هایی در عرصه موسیقی کرد. به‌طوری‌که ابتدا در سنین نوجوانی در جمع همکلاسی‌ها و بیشتر در اردوهای پیش‌آهنگ مدارس آن دوران می‌خواند و بعدها با فعالیت‌های هنری در تئاتر ادامه داد ولی فعالیت هنری عباس قادری به‌طور جدی و حرفه‌ای از سن هجده سالگی آغاز شد، که باید راهنمایی‌ها و تشویق‌های استاد انوشیروان روحانی را یکی از مهمترین عوامل آغاز فعالیت جدی و حرفه‌ای او دانست.[۲]\n" +
            "\n" +
            "اولین آهنگ عباس قادری آهنگی بود به اسم چیزی که عوض داره گله نداره که بعد از عرضه، با استقبال خوبی از طرف مردم رو به رو شد و بعد از این آهنگ او صدها ترانه خاطره انگیز دیگر هم اجرا کرد. عباس قادری تنها خواننده‌ای از نسل خوانندگان مردمی ایران است که بعد از انقلاب ۱۳۵۷ دست از کار خود نکشید و همچنان کارش را تا به امروز ادامه داده‌است.\n" +
            "\n" +
            "بعد از حدود چهل و پنج سال فعالیت هنری در کارنامه هنری این هنرمند حدود ۸۳۰ ترانه در آلبوم‌ها و سبک‌های مختلف به چشم می‌خورد.[نیازمند منبع] و از این هشتصد و سی آهنگ عباس قادری، حدود هفتاد آهنگ، برای فیلم‌های قبل از سال ۵۷، موسوم به فیلم‌های فارسی اجرا شده‌است؛ که از جمله معروفترین این آهنگ‌ها که برای فیلم اجرا شده‌است، می‌توان آهنگ‌های (بدنام) و (چیزی که عوض داره گله نداره) را نام برد.[۲]\n" +
            "\n" +
            "عباس قادری دارای دو دختر و دو پسر به نام‌های علیرضا و شهرام است که آهنگ‌های جدیدش از ساخته‌های شهرام است و همچنین تعدادی از آهنگ‌های قدیمی عباس قادری توسط شهرام قادری دوباره تنظیم و بازسازی شده‌است.[۲]"
    },
    {
        id: 8,
        name: "شجریان",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Mohamdreza_Shajarian_1.jpg/250px-Mohamdreza_Shajarian_1.jpg",
        data: "محمدرضا شجریان (زادهٔ ۱ مهر ۱۳۱۹ – درگذشتهٔ ۱۷ مهر ۱۳۹۹) موسیقی‌دان و خوانندهٔ ایرانی بود. سایت انجمن آسیا او را پرآوازه‌ترین هنرمند موسیقی اصیل ایرانی[۱]، خبرگزاری بی‌بی‌سی و سی‌ان‌ان وی را خوانندهٔ افسانه‌ای ایران[۲][۳]، روزنامه ونکوورسان او را یکی از مهم‌ترین هنرمندان موسیقی ملل[۴] و همچنین رادیوی عمومی ملی (NPR) در ۲۰۱۰ وی را یکی از ۵۰ صدای برتر جهان معرفی کرده‌است.[۵]"
    },

]

const Layout = ({children}) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Grid container>
                <Grid item xs={12}>
                    <Header open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose}/>
                </Grid>
                <DrawerRight open={open} handleDrawerClose={handleDrawerClose}/>
                <main
                    className={clsx(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.drawerHeader}/>
                    <Container maxWidth={"xl"}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Paper elevation={10} className={"p-2"} style={{background: '#FF8C8C'}}>
                                    <Preview/></Paper>
                            </Grid>
                            <Grid item xs={12} style={{width: '0px'}}>
                                <Paper className={"p-1 text-light"} style={{background: '#FF8C8C'}}><Artists profile={profile}/></Paper>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Paper elevation={10} className={"p-2"}> <Sidebar posts={posts} /></Paper>
                            </Grid>
                            <Grid item xs={12} md={9} className={"mb-2"} style={{width: '0px'}}>
                                <Paper elevation={10} m={2} className={"p-2"}>{children}</Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </main>
            </Grid>
            <div className={classNames('p-0 m-0', clsx(classes.content, {
                [classNames(classes.contentShift, '')]: open,
            }))}>
                <Footer/>
            </div>
        </div>
    );
}

export default Layout;
