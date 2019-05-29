
// div要素を生成
'use strict';

var test = [1, 2,3, "test"];
console.log(test);

//sort用関数
function object_array_sort(data,key,order){
  //デフォは降順(DESC)
  var num_a = -1;
  var num_b = 1;

  if(order === 'asc'){//指定があれば昇順(ASC)
    num_a = 1;
    num_b = -1;
  }

 data = data.sort(function(a, b){
    var x = a[key];
    var y = b[key];
    if (x > y) return num_a;
    if (x < y) return num_b;
    return 0;
  });

 return data; // ソート後の配列を返す
}
//ここから新しいスクリプト
const RAW_SIZE = 7;

const CSV_FILE = [
//ここにcsvファイルをコピペする
//mv -f ~/ダウンロード/"eeic2019名簿作成フォーム（回答） - シート2.csv" ~/デスクトップ/eeic/meibo/"eeic2019名簿作成フ ォーム（回答） - シート2.csv"
43580.5417,'佐藤賢志郎',,3190474,'とうふ','https://drive.google.com/open?id=11NtvfsQNJ2uyaG6CQDbcj_Ck-2bCWXQ2','名簿を作りました。パ長をしています。趣味は料理と筋トレです。強くなりたい。EEIC最高！！！🕺🕺',
43580.6422,'中本圭',,3190438,'けい','https://drive.google.com/open?id=1cYbr9pi7xzJVXq5Cvd0i_7bsj_8rZJwG','野球が大好きです。／1限に行くのが苦手です。／2限に行くのが苦手です。／閉館まで図書館にいるのが好きです。／いつも赤い自転車で移動しています。',
43580.6454,'門井丈丸',,3190413,'ピカチュウ','https://drive.google.com/open?id=1BHC63T6mqqNGRcXt8_os9_WQQd6Ckv7l','英文読解が好きです．人間も好きになりたい．',
43580.6497,'西山 晃人',,3190503,'あっきー','https://drive.google.com/open?id=1ueB18DPCgLb1gXoaq7cs5YlvoL-zIROD','色々な呼び方をしていただいてるのであれですが、西山でもあっきーでも好きなように呼んでください！／スポーツ全般は好きです！勉強も大好きです〜笑',
43580.6519,'菊地晏南',,3190469,'あなん','https://drive.google.com/open?id=177ZnYTrFTzy-fIK_tYQttJKt0vUnStUi','バスケとバレーやってます！／eeicのみんなともっと仲良くなりたいです！',
43580.6668,'澤田悠太郎',,3190424,'ベン、おべんくそ、げろ','https://drive.google.com/open?id=10tD3h2W4pxfkNUwNydxTRANnkfEAxlOm','気軽に話しかけてください！／お笑い好きです！／麻雀しましょう🀄️',
43580.9519,'佐野由季',,3190475,'さのゆき','https://drive.google.com/open?id=1iICqHM0fCjKFS6jKE-Q6RSKOF71iiqXx','eeic同期でもっと仲良くなりたいです！',
43581.0158,'秀島 宇音',,3190445,"'ひで, Takato Hideshima'",'https://drive.google.com/open?id=1bia4Gw3NVLwuKdwBpkLv_Dsa0FzPJ94z','Share your creativity with me.',
43581.0175,'西山 晃人',,3190503,'あっきー','https://drive.google.com/open?id=1b1-UOx2pSd6t_Je3zfM9zO1pZuOA_z9f','1番好きなことは睡眠です。後はスポーツ全般好きです！特に自分でやるのが好きです！／よろしくお願いします！',
43581.0409,'鈴木遥登',,3190483,'はると','https://drive.google.com/open?id=1u8Fm0E7T46BZAOY5nU95ugxrtfGlIora','電電／Twitter名:少年H／出身:ラブライブ！サンシャイン!!の聖地沼津／趣味:／•サッカー観戦(年間10試合程度)／応援してるチームはジュビロ磐田。サッカーはするのも好き。昔は現J3アスルクラロ沼津の下部組織で県大会優勝経験あり／•ボクシング観戦(年間3興行程度)／サッカーかボクシング好きな人いたら話しましょう‼︎／•気ままに散歩、旅行すること／／一人でいるときはぶすっとしてるけど、話せば気さくです！よろしくお願いします！',
43581.0687,'小川 彪（おがわ ひゅう）',,3190465,'fiord（ふぃよるど）','https://drive.google.com/open?id=1gr2f-P3QyYZdMTvCLLW4m4OyihFbrynQ','世界初のバーチャルグソクムシです！競プロやったりCTFやったりWebやったり…誰得な情報を垂れ流していきたいと思います！',
43581.0776,'山下陸',,5180318,,'https://drive.google.com/open?id=1_cTxKoY_JMM6FyviQ1oy2iYpwns_nsDh','セパタクローやってる人',
43581.1071,'中川 紘輔',,3190436,'Twitterのアカウント名で呼ばれることが多いです','https://drive.google.com/open?id=176xQZXjvlK_lHR8C22BKssXfmlNLu4Vm',"'Wake Up, Girls!と高木美佑さんをこよなく愛しています。最近はi☆Ris、TrySail、小倉唯現場にいます。京都市伏見区出身ですが、小学校の時はマレーシアに住んでました。アピールポイントとしては、修学旅行先のマレーシア（再訪）で強盗に襲撃されて応戦し、撃退したことがあります。よろしくお願いします。'",
43581.1465,'片山峻佑',,3190412,'片山','https://drive.google.com/open?id=1-BefjmeKILdPAJNW6SL5Zt8XmWI9N1X9','スマブラとか麻雀好きなのでやりましょう',
43581.1949,'河野 麗',,3190470,'うらら、うららちゃん','https://drive.google.com/open?id=1mLSih5GZKQ-WCqUJnObjBlftix7tvEX-','衛星やローバーの設計に興味があります！／趣味はダンスです💃',
43581.2413,'山川 凌太郎',,3190515,,'https://drive.google.com/open?id=11dZ-bNw0hJDsh19Qec3HwmgQp5k_9GyT','写真の通り、生活の大部分がサークルで歌うことに費やされてます／なのでeeic側にはあまりコミットできてないですが、よろしくです🙇‍♂️',
43581.2422,'田岡健太',,3190488,'たおけん','https://drive.google.com/open?id=1O-6j0Uq4tdJ-UF7mr4ECri5NSp74vmez','田岡と申します。運動会水泳部に入っていて、たまに御殿下にいるので一緒にウェイトしましょう！',
43581.2705,'竹内優稀',,3190430,'Twitterは「ぺんぎー」です','https://drive.google.com/open?id=1irZqIIuVf2pCewTXs1YkshPxYZIP5pMO','ジャグラー兼ゲームプログラマーです。パズルゲームが好きです',
43581.4036,'吉田翔',,3190520,'Ｂ(ちゃん)','https://drive.google.com/open?id=1nYYI-x6wwUg6vIUwBuS6Lk1ybLWDZ68O','東大オケで、ホルン吹いたり執行部やったりしてます。／みんなよかったら演奏会来てね！！',
43581.5128,'進士喜章',,3190481,'特になし','https://drive.google.com/open?id=1NF7_VbLpIDQlOFktvo-WA7fYLqcR1aVh','英語勉強中です。',
43581.6087,'森 直也',,3195001,,'https://drive.google.com/open?id=1b6nftAFGQmmrLGL_OaHkW5BjJA3hMsCn','ゲーム、運動、吉岡里帆さんが好きです。対戦よろしくお願いします。',
43581.6256,'片山 育星',,3190467,'いかた','https://drive.google.com/open?id=1wWqSJRLm3T0i_JWTKPfDI-SKrBYFh8zQ','音楽を幅広くやっててギターとピアノ弾きます。合気道もやってます。',
43581.6334,'宮野広基',,3190513,,'https://drive.google.com/open?id=11WDBerqC1tPq_F4ZdgbMF0ch2cIM8U4D','ロボテックで機械を作ってます。電子工作とかものづくりが好きです。／他にもF1やアニメ、PCゲーム(FPSとかleague of legendsとか)が趣味です。よろしくお願いします。',
43581.6862,'山口祐司',,3190517,'ぶーじ(中高時代ですが)','https://drive.google.com/open?id=1kgQtHpbTkQmlkw5INKCJo4xNT3ptgu-T','サークルは、地理部と鉄道研究会、帝虎会(最近行けてません)に入っていて、また今年から丁友会とTtimeにも入りました。現時点では、制御系の研究室に進もうと考えています。よろしくお願いします！',
43582.1282,'小野直樹',,3190804,,'https://drive.google.com/open?id=17mOPzUgvYRaDyUYXySMtHR6ySndwi4lm','絵とか描く可能性があります😉',
43582.3532,'富木菜穂',,3190434,'なほ、とみき','https://drive.google.com/open?id=1m_oDWWz1Xmo7l9cbCIspX8la5ZSCyl21','フィロムジカというオーケストラでフルートを吹いてます。／演奏会とか来てくれるととても喜びます♪',
43582.6078,'蔡昱毅',,3190422,,'https://drive.google.com/open?id=1948wxH0rgc_VglakRBg4ucx3f-VPoC9z','修理屋やってます。困ったことがあればぜひご相談を。',
43583.3511,'落合貴也',,3190466,'おちあい、屋上','https://drive.google.com/open?id=1Nh5wRWEqFoJwuH60ncf8h59BZQXhrQWa','たぶんカップル受講の人です笑',
43583.4778,'内藤 壮俊',,3190435,'そうしゅん','https://drive.google.com/open?id=1GSQtaxzOU5BSssjUCayhbfrW3fF-bbBv','数学とかプログラミングとかが好きです。ノンリニアでゲーム作ってます。／喋るのは結構好きな方だと思う',
43583.4940,'辻啓吾',,3190497,,'https://drive.google.com/open?id=1_pynkqCK0UVkGO35-tHdu-oU9dsBLN6r','しょうもないことが好き',
43583.4969,'笠西 哲',,3190410,'特になし','https://drive.google.com/open?id=1_DHs_aiBhGX2Gc2JHtimDuzIH7J6JjK3','TBAというサークルでバドミントンやってます。もし他にバドしてる人がいれば御殿下とかで一緒に打ちたいです！／また鉄道旅行が好きで、夏休みなどによく18きっぷで日本各地を旅してまわっています。／これからよろしくお願いします！／Twitter: @tetsu9923',
43583.5390,'大井元',,3190405,'げん○○、おおいちゃん','https://drive.google.com/open?id=1meLCrOlrmOLATkmH3x5nozSmcLdGI1oP','工場見学の人です。御殿下に通うとここで宣言しておきます！お酒に強くなりたい...',
43583.5469,'勝瑞雄介',,3190426,'しょーずい、ずい','https://drive.google.com/open?id=1GJZk6NqY44wN91lQ7rELnGyG_nOp6ZXs','ボードゲームやアーケードゲームが好き',
43583.5570,'高品 剛大',,3190489,,'https://drive.google.com/open?id=15HXH8pqwiuNP7owUnNlfV3fX0fC8fWyU','デレステP',
43583.5744,'下野明佳里',,3190480,'あかり','https://drive.google.com/open?id=1tJ3Q2aKP7FDKAIUIGZRdx1j7--GqnGYR','鹿児島出身です／音楽とお笑い好きなので好きな方いたら話しかけて下さい:)',
43583.6375,'寺尾健裕',,3190501,,'https://drive.google.com/open?id=1DfrmfmpPRK8qzZLjy-kpfzCpqaUt4JMh','卓球趣味で、するのも見るのも好きなので趣味が合う方がいたら是非。なろうとかも好きです。インターンを探してるので紹介してもらえるとありがたいですm(__)m',
43584.0499,'金谷光一郎',,3190414,'かなや','https://drive.google.com/open?id=1lYQuPPaGJlX_bejf1dQjSfDzJzuquGMN','クールで天才な絵に描いたようなイケメンがいたら僕だと思ってね。／AtCoderやってます。天才なので赤色かもしれないよ。／実際は緑だよ。人生辛いーいーあいしーだね。／みんながんばろ！',
43584.0827,'京野長彦',,3190418,,'https://drive.google.com/open?id=1YWsi2Y_GsOLgKy898znjbHoi3GMGHye8','信号解析不可ったやつです',
43584.1644,'堀 紡希',,3190449,'堀、つむつむ','https://drive.google.com/open?id=1reqek5R8IIHTAevgbtzkzs7dFdywWI7W','たまに控室でボードゲームなどしているので一緒にやりましょう☆',
43584.4903,'箱田崚',,3190440,,'https://drive.google.com/open?id=1MSc7lYjzegDI2-CrxvTQ-2ycuzAM77Lq','学科内隅っこ勢なんで声かけてくれるとうれしいです',
43584.5638,'近藤 佑亮',,3190421,'コンドウナギ、ウナギ、ナギ、こんちゃん、どぅー','https://drive.google.com/open?id=1XXWljenPb9-7Ntdu-Bg3oNLbE7NMyPJj','運動会のボディビルアンドウェイトリフティング部に所属しています。／一緒に御殿下でトレーニングしましょう！！！／／プロダクトを作るのに興味があるので、もし何かで人手が足りなければ声をかけてください！！！／／アニメ大好き！！！',
43584.6581,'高橋篤剛',,3190491,,'https://drive.google.com/open?id=1Qm2vPCnsje2zhue0h8JMuKJr9kfkPczm','回答遅くなってすいません...',
43585.6120,'船渡勇吾',,3190509,'ふなと','https://drive.google.com/open?id=1-IUs5x5iSO2EsEMktwSe_JZ_1B9F78T_','バスケが好きでよくNBAとか見てます。仲良くしていただけると嬉しいです。',
43586.5681,'大宮誉史',,3190461,'なし','https://drive.google.com/open?id=1GQTKQP0i8k8GeavaoeAK3JmoS6eWavGK','愛知県出身で実家は三重県です／中日とか好きです、ハロプロとかも好きです／よろしくお願いします',
43587.3107,'大森拓郎',,3190462,,'https://drive.google.com/open?id=1wtmvtSuP8UuvNlWLcislhhFAq-y925cJ','電電ですけどコンピューターの内部とかソフトウェア系に興味があります。よろしくお願いします！',
43587.4625,'久留陽一郎',,3190507,'トメさん','https://drive.google.com/open?id=1RiAFo_VBLYZoU0V1_9t4caj1HPb6YxV5','甘いもの、アクアリウム、サイクリング、プラモデル、漫画、空手が好きです。寝坊します。出席票回してください。',
43587.5269,'稲津遥太郎',,3190457,'ぴなつ、ピーナッツ','https://drive.google.com/open?id=1OHajv47sWLKSWFj0zvIaYWVikj1hh1YC','音楽が大大大好き。多重録音ギターピアノアカペラなどやってます。',
43587.5977,'遠藤 達朗',,3190460,,'https://drive.google.com/open?id=1DLiVQa0YIFFAh-F5mSBcCGIAwXQNsnTU','自分で自分自身のことを把握できていないきらいがありますのでご容赦ください。',
43588.3201,'岡村京輔',,3190464,,'https://drive.google.com/open?id=1qOVWF5q2tMucDeKfvwYIHfe212HquOMP','スマブラとか誘ってくれると泣いて喜びます／プログラミング弱者なので任意のプロの方是非お助けを',
43588.3213,'竹田慎次朗',,3190494,,'https://drive.google.com/open?id=1R-QwDbB-HgQ3QLSJFGxdwta2EceN1oZy','逆立ちとパワプロが好きです',
43588.3269,'篠田和宏',,3190425,,'https://drive.google.com/open?id=1k9ouDsVF3ngpcGcI6EcQFSHwtxfiehow','Twitter:@kcfnen1916',
43588.3586,'ピチュカ ヴェンカタ ラマナ',,3190444,'ピチュカ','https://drive.google.com/open?id=1U4z0MTh9R8s7hS9riA1W72U8OSqZNJ08','インド人です。',
43588.4075,'河野 翔太',,3190471,,'https://drive.google.com/open?id=1Yxxtjf4akohUl4z2l8IM4ok50FLTpjwq','小さいころプログラミングもどきをやったことがあり、最近ちゃんとした言語に触れて衝撃を受けました。プログラミングで何か楽しいものを作れたらなあと思っています。',
43588.4409,'柴田彩登',,3190477,'柴ちゃん','https://drive.google.com/open?id=10SvWRiYCuQCInvpsIzJ81EjnGh4z6v8t','アマチュア無線やってます、よろしく',
43588.4523,'藤村柊吾',,3190447,,'https://drive.google.com/open?id=1SGJYUReaAG_BIh7-KRydfR2t1TLNDwBG','バスケと自転車が大好きなわんぱく小僧です！',
43588.5634,'木内陽大',,3190415,'きうち','https://drive.google.com/open?id=1-NdZjJRA9XVZqgukqHgXdyiU_Nz0VZEC','高校でアメフトやってましたー(全然ゴツくないけど)／LGTMっていうエンジニアコミュニティ団体を友達と運営してます！／企業に協賛してもらってハッカソンとかやってます！／興味あれば声かけてね^ ^',
43588.5709,'邢 明吉(しん あきよし)',,3190427,'しん(君付けが多い)','https://drive.google.com/open?id=1SNodbcsoX-IJBLJet8Edfo_zXry35dqu','プログラミング系はよわよわ(AtCoderチュートリアルしか触ってません)／趣味は謎解き、スプラ／シュタゲは見るべき／／',
43588.6298,'畠山智之',,3190506,,'https://drive.google.com/open?id=11DJp2LVXkgYVTy1GjL2w4Am28X-eMs8h','トランペット吹いてます〜',
43588.6994,'秦竟超',,3190428,,'https://drive.google.com/open?id=1S0Vn1mWTuxBcfyqyQVKs3SGksqq0Dv6O','彼女いません。絶賛募集中です。',
43588.7330,'藤田航輝',,3190446,'ふじこー','https://drive.google.com/open?id=16-PlgmNW-QKtDLEmWV6Sm4Bw1MeSIvYh','Twitterをやってたりやってなかったりします。あまり言ってないのですが実は競馬がめちゃくちゃ好きで多分学科で1番詳しい自信があります()／よかったら話しかけてください笑',
43588.7384,'鈴木凌斗',,3190485,'モジャ','https://drive.google.com/open?id=10_Ver-hxObfFWE7zUL3Rbgc3AAljCOwK','家が近いので遊びに来て乁(˙꒳˙乁)ｸﾚﾖ...',
43588.7803,'星 智文',,3190448,'(中学までは「ほっしー」呼びだった)','https://drive.google.com/open?id=1gsqX4jBK6vtEcChugzAy9wrlttCfypMm','大体いつもチェックシャツ着てる人です。／コミュ障ガチ勢ですが、話しかけられたくない系ではないのでよろしくお願いします。',
43588.9676,'髙橋俊',,3190492,,'https://drive.google.com/open?id=1fTtYG0oKi-n7tRxwwDVO9v7jTRu-zq2z','カメラ、ロードバイク、ランニング、イワテ、',
43589.0473,'澤邉　裕紀',,3190476,'べつ','https://drive.google.com/open?id=1qH7vGY-qg_Dq7aofRZxukXJqq9VTcc7I','べつです。／生まれてからビデオゲームしかしたことないです。／基本的に話しかけられるのは嬉しいので、仲良くしてください。／よろしくお願いします。',
43589.0526,'ウィジャヤ　テオドルス',,3190459,'テオ','https://drive.google.com/open?id=1pGbtgz70WgCkcZZglQC2msGW26YiAK_l','インドネシアから来た留学生。趣味は語源学や読書。昔の曲は現代よりファンキーだと思っている。',
43589.1548,'清水麻琴',,3180482,'まこっちゃん','https://drive.google.com/open?id=1mT3kT_uJOFCsRFaD2iSaGdDRg-pEyTZj','よわよわだけど頑張りまーすよろしく！',
43589.2875,'松藤圭亮',,3190510,'まっちゃん　まっつん','https://drive.google.com/open?id=11vUxVY2jX9UwxoVyHpEhS_nV16GzYjMd','この名簿を作ってくれたとうふくんに感謝。いまEEICの中で面識ある人を数えたら50人だった。この名簿をうまく使って、卒業までに全員と知り合えたら／福岡県福岡市出身。幼少時より国内各地を転々とし、今住んでるシェアハウスで10か所目／地図の読み書きを含む活動（鉄道、山歩き、サイクリング...）が大好き。国際地理五輪銀メダリスト／ネイティブではないが中国語ができる。中学時代から勉強していたが、それは中国語の音の美しさに魅かれたからで、特に先見の明があったわけではない。根津の唐揚げ屋さんのメニューを中国語に訳したご縁で、その日の余った唐揚げをいただいている／EEICにやってきたのは、スマホやAIの次には何が来るのかを探すため。レベルの高い同級生たちに必死についていっている／将来は創業し、日本を代表するテクノロジー企業を育てたい。太陽光を人類最大のエネルギー源にしたい／オンラインでの返事が遅いのが課題。鋭意改善中／悩みは現在恋人がいないことくらいで笑、毎日とても幸せに生きている。',
43589.3244,'髙橋俊',,3190492,,'https://drive.google.com/open?id=13QrOjWZP5vV1KNPLj4pIfVRcck9ae562','カメラ、ロードバイク、ランニング、イワテ',
43589.5353,'上野　爽',,3190403,,'https://drive.google.com/open?id=1hnUin4NZVmlsNlkSuQ0KmDurOwsErYGQ','ラズパイとか制御とかゆる～くやってます',
43589.6094,'加藤准也',,3184002,,'https://drive.google.com/open?id=1tha0LKRwQxqBcxY4kRuZP-_Mae_T6p4d','資本を蓄積して、学士入学しました',
43589.6279,'森一馬',,3190514,,'https://drive.google.com/open?id=1ED_T27cGVhU2aofCju6gYu4fzRyt6Ff1','体を動かすことが好きです(特にサッカー)',
43589.7972,'中本光彦',,3190439,,'https://drive.google.com/open?id=18XTsnBnc6Ec7bZoD6HsGFoRpgX7BmxM7','圭じゃない方の中本です',
43590.0085,'生野駿',,3190401,'のしゅん','https://drive.google.com/open?id=1gHfA_xcUUYAfEtnUx9ReMH3SAOlDdRj5','左後方が指定席',
43590.2047,'有井慎平',,3183006,'慎平','https://drive.google.com/open?id=1cj2dgWM3NceXZAwan-6OoIi_p8FMT1_A','高専からの編入です。よろしく。',
43590.3712,'櫻崇史',,3190423,'チェリー','https://drive.google.com/open?id=1O5HPPPqb6INqLP8A0xHTkBaOwNqlSpa-','文ニから来ました。オーディオが趣味',
43590.5675,'鈴木大智',,3190482,'鈴木、大ちゃん、石油王、アラブ…etc','https://drive.google.com/open?id=1rrIwUcA7sY2cSk78eg9nGF9BKqdn1fLR','好きな食べ物はチキンカツとカレーとマシュマロと海苔です。',
43591.0297,'木野山 力隆',,3190416,'きの、リッキー','https://drive.google.com/open?id=1Hq5Ae41p9rCrnPsm1hs-nOc8UoN5vGMF','ゲーム、散歩、サイクリング、映画、甘いものなどいろいろ好きです。よろしくお願いします。',
43591.2615,'陳瑞彦',,3190496,'Ruiyan/チェン','https://drive.google.com/open?id=18uUMseoa7PTx2eefaSY0bAfcdQ4Qh-g4','（人見知り＋顔・方向・運動音痴＋日本語弱）×（趣味音楽＋一応バイオリン上級＋高校の時バンドやってた）＝？',
43591.2930,'関 祐一',,3190487,,'https://drive.google.com/open?id=1TfnSJhi-F5ztPgAvzXSfp7pji2J2q-FD','ぼちぼち絵描いてます',
43591.5146,'覚井優希',,3190409,,'https://drive.google.com/open?id=1AuFx1CAQa_ysGkdRa5FwIl9trV12E3d-','ジャグリングします。',
43592.1510,'長谷川祐也',,3190505,'長谷川','https://drive.google.com/open?id=1qh6uBlY4YVttZ3xvSSXnY0l24IANOs3M','よろしくお願いします',
43592.3242,'竹中 毅',,3190431,,'https://drive.google.com/open?id=1md6bSV-LLL04UPr-uOVEYAgKr3zSVzvL','趣味: アニメ音楽YouTube ',
43593.1589,'吉津遼平',,3190522,'りょうへい','https://drive.google.com/open?id=1jsOdTMROWpRx90oUnVoiQp4hFImyPrze','週刊少年ジャンプを毎週読んでます。呪術廻戦推しだよ。',
43593.1640,'高城和馬',,3190493,'たき','https://drive.google.com/open?id=1oggjUcPe835lYL204YXC415vfedio17C','漫画、小説、アニメ、映画、邦楽、洋楽、バレーボールなど、ここに書ききれないくらい好きなものばかりです。人生楽しいです。よろしくお願いします。',
43593.2772,'稲津遥太郎',,3190457,'ぴなつ、ピーナッツ','https://drive.google.com/open?id=1h9Mv7o8szPJ9s0-Z6fHg4-xLaQJbY1N2','音楽が大大大好き。多重録音ギターピアノアカペラなどやってます。',
43594.3684,'宮田寛生',,3190512,'ふなっしー','https://drive.google.com/open?id=1tySj-oEhufgPtKnjUjc9HUOue8NJ4V-G','授業についていけません。本当に心配です。／後、将来もすごく心配です。',
43595.2192,'鍜治口 結衣',,3190411,'かじぐち','https://drive.google.com/open?id=16arjfEoyG77G9SDsR8F5zKxhFWJOZF0k','Twitter @kajiguchi97 です。／初音ミクが好きです。MMDの環境構築で詰んでるので詳しい人教えて……',
43608.3551,'浅部 佑',,3190397,,'https://drive.google.com/open?id=1uuudq1lqO25p5083WSiHIBg0Oh9XHTNa','幅広く技術周りが好きです。今までは広く浅くみたいなところがあったのですが、今年からは深く攻めていきたいなーと思ってます！昨年は米国でちょい働いたり新しく始めたギフト系ECが忙しかったりと休学してて同期にあまり知り合いがいないので、気軽に声かけてくれると嬉しいです！ビジネスに限らず最近はセキュリティとか低レイヤーにも興味がありますー！',
43608.3626,'新浩太朗',,3190398,'あらた','https://drive.google.com/open?id=1HxKIk5R1ISqi1EeHr97NRffom8wc39Et','いつも前の方で授業受けてます、よく控え室にいるので一緒にゲームとかしてください！',
43608.3815,'高崎環',,3190429,'めぐる、とかめぐるん、とかですかね','https://drive.google.com/open?id=1UggjFEXkvH3gz_C1JrgekyKSwknHlFPk','大学からマジックしてます！／出身は岡山県です！趣味は遊ぶことと旅行と寝ることです！／全然話したことのない人ばかりなので、是非仲良くしてください〜！',
43608.3862,'越能俊介',,3190472,'しゅんすけ','https://drive.google.com/open?id=1275cwkE3wRUEl47xFkHiXyEkrjQvb8DT','石川県出身です。サッカーが好きです。よろしくお願いします。',
43608.4344,'阿部浩太郎',,3190456,'あべこー','https://drive.google.com/open?id=1M7l_Egvnsvvhn4STdYvb4G6K7arwQ2Hw','横浜から通ってます。',
43608.5162,'安斉周',,3190400,'ざいしゅ','https://drive.google.com/open?id=1WqzGnafp2X9D2GJRZXFdIDBcpC3-vseM','音楽と旅行が好きです。ベースが弾けます。イベ長です。よろしくお願いします。',
43608.5247,'阿久井 駿',,3190396,,'https://drive.google.com/open?id=19bfmhewAaE1P8FjLilHSkkMaMdwuZAn_','吹奏楽でトランペットやってます。／音楽好きな人是非話しましょう…！／あと最近競プロもはじめたので界隈の人色々教えてください…！',
43608.5330,'高田 篤志',,3190490,,'https://drive.google.com/open?id=1lVGQntKMG5i_Fr6w1vdqyC5_XECL0cmO','足は軽めです',
43608.5372,'中田惇貴',,3190437,,'https://drive.google.com/open?id=1Kv1tbc6GY6cSue0-klWuapowQdAnYsIp','2Aの時に割とやってたAtCoderを最近再開した(aleutra)のでまた頑張っていきたいところです…',
43608.5482,'出口裕也',,3190500,'やんぎん','https://drive.google.com/open?id=1EAjNnSbpEwCI6AwjO-QuzrMimLlHFYBq','一緒に古戦場を走ってくれる人を募集しています。',
43608.5685,'荻野 由真',,3190407,,'https://drive.google.com/open?id=1SbBoHuvp4m1Ul5zoD6lH5yTiwBm-sI0L','ごろごろしてゲームするだけの人です  PC・PS4とかで遊ぶ人いたらよろしくどうぞ',
43608.5769,'吉清 秦生',,3190519,'よしきよ','https://drive.google.com/open?id=1e0Z4mkymyNOGbUR_Mg81jHiRyQ6JoMFi','世はグルメ時代',
43608.6162,'山口 貴史',,3190516,'や◯ち','https://drive.google.com/open?id=1tcO9SnRcSlGq7Au5j9CTLi8LnLXYSZfd','特に何も強くないですが音ゲーがちょっとできます。',
43608.6228,'林孝明',,3190443,,'https://drive.google.com/open?id=1VZHbtJ_6JoHZeVMYs4PBD2pX0QKRB7Ji','新幹線ユーザーです。ラーメンとか油そばとか好きです。／よろしくお願いします。',
43608.7524,'角南陽人',,3190481,'ぺち','https://drive.google.com/open?id=103WoG4elm4oELcKShByQfYVcLBnKxryd','ごちうさが大好き！！！',
43608.7811,'吉田 慎一朗',,3190521,'ぴーよ','https://drive.google.com/open?id=10696nXtL-jAMX12LZYiqduSGoxygz1BC','絶起しがち',
43608.8636,'佐藤賢志郎',,3190474,'とうふ','https://drive.google.com/open?id=11NtvfsQNJ2uyaG6CQDbcj_Ck-2bCWXQ2','名簿を作りました。パ長をしています。趣味は料理と筋トレです。強くなりたい。EEIC最高！！！🕺🕺',
43608.8834,'小谷健太朗',,3190420,,'https://drive.google.com/open?id=1WH38oJ4X64hqWJpcw7-USe4QPixEHVdS','アマチュア無線してました／（登録遅れてごめんなさい）',
43608.8858,'寺坂壮一郎',,3190502,,'https://drive.google.com/open?id=1PyWjsckocD9FPvMuQndtZEvdE9SyAyFi','ハードにより興味があります／よろしくお願いします',
43609.3907,'島田泰慎',,3190479,'しまたろう','https://drive.google.com/open?id=1hssNrF4iYOSMzQBZEdkLgQhAILKOUog2','RoboTechです',
43609.3909,'島田泰慎',,3190479,'しまたろう','https://drive.google.com/open?id=1uPyw4bgCVhfhAulq6R6Zqvnp98rkJIOC','RoboTechです',
43609.4229,'木村元紀',,3190417,'きゃべつ','https://drive.google.com/open?id=1ONMp26KfFx_zLEJMAdIcy9_fIeYTKP68','仕事をしないweb長。C++とロボット',
43609.4412,'Jaesol Ahn',,3190399,'ジェソル','https://drive.google.com/open?id=1fJMAoZko1dqd8FzfLs_BhBz8OkWanI6X','よろ',
43610.3102,'Jaesol Ahn',,3190399,'ジェソル','https://drive.google.com/open?id=1yKe86guWKI4suVCK1T_HYGcvu2R27hMB','よろ',
43612.3852,'タナークルイッチラット アリタット',,3190495,'バンク','https://drive.google.com/open?id=17wbqpdOySPSt7ORvMg1ZwuB2ZWLp6lIV','タイから来た留学生で、日本のことが色々わからないので 、ぜひ私と話しかけてください^_^ 興味はスポーツ系と音楽。',
43612.5015,'鈴木優斗',,3190484,'すずく(Twitterの垢名)','https://drive.google.com/open?id=1CKyPeVrPoHbem3nQ7FtcPLUAqK9xbunc','eeicでの生活に活きるような趣味や特技は特になく、色々なゲームを浅く広く嗜む生活をしてます／家から学校まで20分かからないのに毎日遅刻しているのでなんとかしたいですねー',
43613.5631,'鶴岡駿',,3190499,,'https://drive.google.com/open?id=170WQcFn9JU4YgOLTcjC0jxVAywM-mi1T','げーむしたい',
43614.1747,'佐々木 怜音',,3190473,'レオン','https://drive.google.com/open?id=1f3yAdT2gZ_cbZcjbV50O-XTCvg6BG-nh','口だけ達者なピエロ',
43614.3046,'金谷光一郎',,3190414,'かなや/かなやん','https://drive.google.com/open?id=1ji_4c0LeNwSvQxaWLGSpPLzABjkvJvXJ','シケ長と対立してますが、あくまでファッションであり、裏では仲良しです。／あといつもうるさくしてごめんなさい。これでも中学の頃の1/100くらいにはなりました。／あと全ての授業についていけません。みんな助けてください。',





];
const STUDENT_COUNT =  (CSV_FILE.length /RAW_SIZE | 0);
var MEMBERS = Array(STUDENT_COUNT);

function STUDENT(_time,_name, _gakka, _number, _nickname, _icon, _message) {
  this.time = _time
  this.name = _name;
  this.gakka =_gakka;
  this.number =_number;
  this.nickname = _nickname;
  this.icon = _icon;
  this.message = _message;
}

for(let i = 0; i <STUDENT_COUNT; i++){
  MEMBERS[i] = new STUDENT(
    CSV_FILE[i*RAW_SIZE],
    CSV_FILE[i*RAW_SIZE+1],
    CSV_FILE[i*RAW_SIZE+2],
    CSV_FILE[i*RAW_SIZE+3],
    CSV_FILE[i*RAW_SIZE+4],
    CSV_FILE[i*RAW_SIZE+5],
    CSV_FILE[i*RAW_SIZE+6]
    );
  }

//GoogleDriveのURLを画像として取得可能な形にする
for(let i=0; i<STUDENT_COUNT; i++){
  MEMBERS[i].icon ="http://drive.google.com/uc?export=view&id=" + MEMBERS[i].icon.slice("https://drive.google.com/open?id=".length);
}

//MEMBERSを学籍番号でソートする
MEMBERS = object_array_sort(MEMBERS,`number`,'asc');

var tmp = -1;

// プロフィール画像の作成
for(let i = 0; i < STUDENT_COUNT ; i++){
  if(tmp == MEMBERS[i].number) continue;

  const icon = document.createElement("img");
  icon.src = MEMBERS[i].icon;
  icon.classList.add('icon');
  document.body.appendChild(icon);
  //名前の表示
  const name = document.createElement("div");
  name.textContent = MEMBERS[i].name;
  name.classList.add('name');
  document.body.appendChild(name);

  //あだ名の表示
  const nickname = document.createElement("div");
  nickname.textContent = MEMBERS[i].nickname;
  nickname.classList.add('nickname');
  document.body.appendChild(nickname);

  //プロフィールの表示
  const message = document.createElement("div");
  message.textContent = MEMBERS[i].message;
  message.classList.add('message');
  document.body.appendChild(message);

  tmp = MEMBERS[i].number;
}
