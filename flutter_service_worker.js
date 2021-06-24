'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".dart_tool/flutter_build/61923b6390d98588d0059ca7be5271bd/app.dill": "6071b342b7e235d7887859e0ac266ad7",
".dart_tool/flutter_build/61923b6390d98588d0059ca7be5271bd/app.dill.deps": "28e3fca6852c0b67f5d99f5dc839f19f",
".dart_tool/flutter_build/61923b6390d98588d0059ca7be5271bd/dart2js.d": "39aaef45ca1eed84e75af6d51eb2c341",
".dart_tool/flutter_build/61923b6390d98588d0059ca7be5271bd/dart2js.stamp": "4f373d8fc68d2dac933c2964915671c4",
".dart_tool/flutter_build/61923b6390d98588d0059ca7be5271bd/flutter_assets.d": "f609bae82e644c3825cded99780ce584",
".dart_tool/flutter_build/61923b6390d98588d0059ca7be5271bd/gen_localizations.stamp": "436d2f2faeb7041740ee3f49a985d62a",
".dart_tool/flutter_build/61923b6390d98588d0059ca7be5271bd/main.dart": "4e8d7de9489e1a7925e6c95868908224",
".dart_tool/flutter_build/61923b6390d98588d0059ca7be5271bd/main.dart.js": "8a87d40758adeb287a8c1c0a8318696e",
".dart_tool/flutter_build/61923b6390d98588d0059ca7be5271bd/main.dart.js.deps": "1512e8f6257b4da19989f252afca0ae0",
".dart_tool/flutter_build/61923b6390d98588d0059ca7be5271bd/outputs.json": "63e68bfbdcde98559c9c3d5a052bf5e0",
".dart_tool/flutter_build/61923b6390d98588d0059ca7be5271bd/service_worker.d": "c9a07fa8aa9aca39b87ebced01aafb39",
".dart_tool/flutter_build/61923b6390d98588d0059ca7be5271bd/web_entrypoint.stamp": "8cd8026e4b4e07e6653f8ecb83592ece",
".dart_tool/flutter_build/61923b6390d98588d0059ca7be5271bd/web_release_bundle.stamp": "0bbd51e3a9fb2ae04568f822e631d898",
".dart_tool/flutter_build/61923b6390d98588d0059ca7be5271bd/web_resources.d": "43d17459f27337b606754b57cac8f2ca",
".dart_tool/flutter_build/61923b6390d98588d0059ca7be5271bd/web_service_worker.stamp": "9e18d65a4f86f67154eebf64550e3cfc",
".dart_tool/package_config.json": "b2891fc6b0f094ce183be0fadfc61ee9",
".dart_tool/package_config_subset": "9cb67b2846765ff7ffd9e1677dcbdebd",
".dart_tool/version": "0656d165197f3b22591f6e91f3bb970f",
".git/objects/01/6512c716091729c0672d7b7ff9fdc674a5956c": "a69277bcf7db1359d10e1c9956874717",
".git/objects/09/d4391482be68e9e4a07fab769b5de337d16eb1": "a603712ac5534497bc4fd35ebd46b0b7",
".git/objects/0a/741cb43d66c6790a2a913fa24c8878fb1ab7b5": "307011b7f3f57c355deba17946cc9f69",
".git/objects/0b/edcf2fd46788ae3a01a423467513ff59b5c120": "23a6b285e31cde5ab29a2fc1ebfdb935",
".git/objects/0f/a6b675c0a52be9242fc68269eefce46828ad43": "3732df75a452960f40377486a7eb2955",
".git/objects/15/1026b91bc928ad167b6168bf5aabdb4be8ce90": "1e86af25eb532d403b2c1f8a75ea4712",
".git/objects/17/987b79bb8a35cc66c3c1fd44f5a5526c1b78be": "f47de426b1d6c272d2659c734c9de80f",
".git/objects/18/d981003d68d0546c4804ac2ff47dd97c6e7921": "318597cf2655c5770342bae4ab7b90a3",
".git/objects/1a/6143aa3ab28573eefdf2b11b07b2e55797993c": "b806fe16ec15c93058259130bec8a2d8",
".git/objects/1d/526a16ed0f1cd0c2409d848bf489b93fefa3b2": "12bcdfd9683b55567627456d0773a4e5",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/26/6d4f2e4b0e903bd4db4b549fd48c6f8636389e": "805311c87cbcfaa8accb063ff4ce7f35",
".git/objects/27/36e7861302c0fad264de1db59ec930af4c6b2e": "2c231fb518629e75cea5dff78da4543f",
".git/objects/28/c6bf03016f6c994b70f38d1b7346e5831b531f": "859e347621927457ff896dba865a18fd",
".git/objects/29/cfdc84400ab8a7898075be2b8959fc1ce1326d": "f1c14b66e999957d08283625cea91d34",
".git/objects/2c/9d4a0d74b4b9afa3a630c9f3f6e0eb1398b642": "e0e5193baa22e313e78f8acb8125781a",
".git/objects/2c/cbfd967d9697cd4b83225558af2911e9571c9b": "79f574379587d27e91d5ebf05ea6e777",
".git/objects/30/4732f8842013497e14bd02f67a55f2614fb8f7": "76eb293b5c9304707852ee681a90e8fc",
".git/objects/30/8a2a560b42f17aaf3c36e4e9c8cd07182fbb7e": "bc183808cfc617fa9474743616eb4aee",
".git/objects/44/9a9f930826851b495d039f0c0d57f247536615": "64152505999d8f1e4fd9224415d1ffad",
".git/objects/44/cc7187a41a11d3c239908b3bcd2b2162529cd1": "623d6cfcce9470458974fc6783e25e34",
".git/objects/44/e62bcf06ae649ea809590f8a861059886502e8": "2e42f843c31c0484de7ce7a7c79cd856",
".git/objects/4c/de12118dda48d71e01fcb589a74d069c5d7cb5": "28e8a446706511f1a67da714824896ea",
".git/objects/4d/6372eebdb28e45604e46eeda8dd24651419bc0": "1a6a714da9180a4b75ff188c6eb0514f",
".git/objects/59/2ceee85b89bd111b779db6116b130509ab6d4b": "348329ef452b809389b6496387db6913",
".git/objects/64/35c65440662b7a656ef98832aacb5b0b6f93e3": "3658f753542e4521f133cdca225e59c4",
".git/objects/69/2ca1679e05b93a51bb6df588b46fcbcb1e1a48": "d4493c1c42e0da162014ef18320efb37",
".git/objects/6a/84f41e14e27f4b11f16f9ee39279ac98f8d5ac": "a913aaf750cc736879f14f53488f5c42",
".git/objects/6e/913bc4f93739e2f2d504de92f2ec479998280f": "7d9bfad460d37b65a4fcc56305d672be",
".git/objects/70/693e4a8c128fc4350b157416374ca599ac8c7b": "6942d9ddf2906a8e847e7ef6889a4221",
".git/objects/75/b2d164a5a98e212cca15ea7bf2ab5de5108680": "d453ef5dc75a6b2e158c081f7a51acac",
".git/objects/7f/fced4eebeca25784332cb9b6eb544e521610fc": "b79a334e9dc1cb2f1961e3a7cea7346d",
".git/objects/84/b6494fc98b9c670b1ee5f1294c4c236673a2ee": "5f705e128350b175d33e013c137f7aba",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/c2725b70f1882be97f5214fafe22d27a0ec01e": "99b17ebd650decc04c5de3b0893b27f7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/9434a6254f0e9651f402737811be6634a03e9c": "6da5342c04a33ac2131fdae2e4a84892",
".git/objects/93/67d483e44e14a7b58321035967961ed024d732": "ec5e9adea8ee35ee79c9613b26a34286",
".git/objects/94/adc3a3f97aa8ae37ba567d080f94f95ee8f9b7": "daee15d8fbbf348420b6eaf3d86cbf40",
".git/objects/9b/6ed06eb38acc554df2b8a38e5a794cb05fb354": "94e68dc907ed32a5f332be862a61e063",
".git/objects/9d/a19eacad3b03bb08bbddbbf4ac48dd78b3d838": "1176aaa6ff7a19c56cf9a6ea692a2c03",
".git/objects/a2/8140cfdb3ff9b7a11a9497b84546d615db2afa": "6d7635289ce43450f1e676e1c5444b06",
".git/objects/a3/95d54a1e76d281e32054705f8e28962dcd608d": "ad303ddeafccc684008058c4ce7793d7",
".git/objects/a6/d6b8609df07bf62e5100a53a01510388bd2b22": "821831c6c42de47994c16f6a1db3ea7e",
".git/objects/a7/7f2965348a5ae843b29a073171f2bec78be079": "c28dd2d2140ee9bf5aac6577d4b164de",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/bfc389d0b2657f390445d4855622b6dec16b26": "490addc0e62bbbf2c0783a202305b940",
".git/objects/bc/6a58afdda22a443c752eaae3d60c2480511a9f": "d86646f2e9abb9d77e2e8346ade8749b",
".git/objects/c4/df70d39da7941ef3f6dcb7f06a192d8dcb308d": "d394f8200d968d57839b22cbe657146e",
".git/objects/c8/f9ed8f5cee1c98386d13b17e89f719e83555b2": "0fc2e076b543f37f90a9e7159555320c",
".git/objects/d0/e1f58536026aebc4f1f70e481f6993c9ff088d": "18109e32e7fc3bf04e529c14b8723746",
".git/objects/d0/ef06e7edb86cdfe0d15b4b0d98334a86163658": "4d865184682ad08c3405e3934cd91fa9",
".git/objects/d3/6b1fab2d9dea668a4f83df94d525897d9e68dd": "f19c13a91df6187b27767a0c81787173",
".git/objects/d5/f1c8d34e7a88e3f88bea192c3a370d44689c3c": "2e5a4148dc9ebc15b186574d9fb60432",
".git/objects/d7/4aa35c28261a8e78264252be7f0f6f9406ec35": "f6d907a3303a508436779980f9fb2dfd",
".git/objects/db/77bb4b7b0906d62b1847e87f15cdcacf6a4f29": "a2e10fc9c4f60ac00e2b9b1ed3a0b5ac",
".git/objects/dc/9ada4725e9b0ddb1deab583e5b5102493aa332": "e8022082c258e4c83e27519f77484618",
".git/objects/dc/dc2306c28505ebc0b6c3a359c4d252bf626b9f": "e712bf13b0d526e57c6ee1c8acc412d4",
".git/objects/e0/236372e0f421bd9978332a2361fdf7e6b28480": "03d9a619a7833a86b0566d2a4f0a2bff",
".git/objects/e3/4dce9afe4bfb86b96cb579519435256f63b4bf": "45b0900402f9a4ace01ab818b613b0b0",
".git/objects/ec/98142da0b1c96a0986a694620ce75a42f04e6c": "a53bbedd6ebda6ffe1a0325afccbe98a",
".git/objects/f0/91b6b0bca859a3f474b03065bef75ba58a9e4c": "1aef8d0dea7cfdb7ffb51559c81d2fdf",
".git/objects/f2/e259c7c9390ff69a6bbe1e0907e6dc366848e7": "094726a4a1cc307c0a019e65a323f850",
".git/objects/f3/c28516fb38e64d88cfcf5fb1791175df078f2f": "bccf9d20d0adcc345fe8e5f4a745c4ae",
".git/objects/f7/4085f3f6a2b995f8ad1f9ff7b2c46dc118a9e0": "c04177ec14f012cb2c99851a5e1ca941",
".git/objects/f9/b0d7c5ea15f194be85eb6ee8e6721a87ff4644": "db1ee38473c66e5ffa9d28f6dfe66938",
".git/refs/heads/master": "0f656ebe03bea36c2e87a006c144ec9a",
".git/refs/remotes/origin/master": "0f656ebe03bea36c2e87a006c144ec9a",
".idea/libraries/Dart_SDK.xml": "d37c2c3963b64506cef733662a3abc8f",
".idea/libraries/KotlinJavaRuntime.xml": "de38cfadca3106f8aff5ab15dd81692f",
".idea/modules.xml": "3867275a5e85f3eb0ad5db7870554b38",
".idea/runConfigurations/main_dart.xml": "0ecf958af289efc3fc1927aa27a8442f",
".idea/workspace.xml": "25155dfb2368a7e35e1ebbecd505a418",
"android/app/build.gradle": "de5e873998253fabae51540d002819a9",
"android/app/src/debug/AndroidManifest.xml": "f430bd7edebf225c7a4b29e405fed09c",
"android/app/src/main/AndroidManifest.xml": "cdba15b54699581f1a315a2e0f255a1f",
"android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java": "52533b7c97ea341b8c6a13aba97f53e6",
"android/app/src/main/kotlin/com/example/web/MainActivity.kt": "12319e79b274dcb3e3c70d21fda2d252",
"android/app/src/main/res/drawable/launch_background.xml": "12c379b886cbd7e72cfee6060a0947d4",
"android/app/src/main/res/drawable-v21/launch_background.xml": "bff4b9cd8e98754261159601bd94abd3",
"android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"android/app/src/main/res/values/styles.xml": "28e128a0ed9ec526c8673198e751a3cc",
"android/app/src/main/res/values-night/styles.xml": "b98b32ea0a3c018ad99a73ab8e77d32f",
"android/app/src/profile/AndroidManifest.xml": "f430bd7edebf225c7a4b29e405fed09c",
"android/build.gradle": "24887d8223dc89863846e0f84c18ac40",
"android/gradle/wrapper/gradle-wrapper.jar": "3ef954ed0adb79a5bd8a5303165fae05",
"android/gradle/wrapper/gradle-wrapper.properties": "229502955d529ae0e02c6ad58236b7a0",
"android/gradle.properties": "4b01dcf11166d04a1ee03bc0bac87b2a",
"android/gradlew": "7f1cd7eb3f75a1dc85cd37753972a6e2",
"android/gradlew.bat": "375ddea382b6c56a7be2a967a20e0ab5",
"android/local.properties": "cf39fac30f989e91e35d34457e02171a",
"android/settings.gradle": "b673a8efad7eaed18692f958a191f21a",
"android/web_android.iml": "273d851cbe25579b8e6ee48886fa4d6a",
"assets/AssetManifest.json": "b42b08364166fbc113807133a60a241b",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/cappuccino-cupcake_100x100.jpg": "0a852b8abf02efef72dd75632c11b700",
"assets/images/cappuccinocupcake.jpg": "e5fd1c55266d095c535994770ada0fa3",
"assets/images/cikolatali-catlak-kurabiye.jpg": "3bebf8d5ac8b5b59b9a9d5b604c3f2fe",
"assets/images/cikolatali-catlak-kurabiye_100x100.jpg": "ea1536535bf09fda9040a1cd921d02e3",
"assets/images/donut.jpg": "7f537df082b14d8d3a18b5baebe5cee9",
"assets/images/donut_200x200.jpg": "887811fd0a0d5da652a0d80d420f297e",
"assets/images/gercek-browni-tarifi.jpg": "da9fd2e480a6ab1edfbc6327baef975b",
"assets/images/gercek-browni-tarifi_100x100.jpg": "f4c0740eb193dfed6c7f835df7b3d6ad",
"assets/images/kadife-kek.jpg": "225c6069ba637afd4d6c70b2c524852d",
"assets/images/kirmizi_kadife_kek_100x100.jpg": "c20f40926c768bdbdf1fae125d9b31bf",
"assets/images/KREM-PEYN%25C4%25B0RL%25C4%25B0-HAVU%25C3%2587LU-KEK.jpg": "f34c24eb6df706ee9f39b97dd796546b",
"assets/images/KREM-PEYN%25C4%25B0RL%25C4%25B0-HAVU%25C3%2587LU-KEK_100x100.jpg": "e2a9a6e98f0faea027dc27d5d27b4610",
"assets/images/limonlu-cheesecake-tarifi.jpg": "114405daf6c21d299a6539dc09fa2b57",
"assets/images/limonlu-cheesecake-tarifi_100x100.jpg": "3d16f97e4492faa0056c0343b9689d3c",
"assets/images/login.jpg": "07ecc6c0380c8ba15e0cb39c1b2666af",
"assets/images/logo2.png": "b2b5938346020e8218eb2b702ebe44c6",
"assets/images/macaron.jpg": "64e839439d0fcbb70082969900ce4e69",
"assets/images/macaron_100x100.jpg": "36c6764f75b3dd23f34b7789e24acc6b",
"assets/images/mangolu-puding.jpg": "9b8100bb6219382e0ec712cf3c74580b",
"assets/images/mangolu-puding_100x100.jpg": "589ffdfc6c42d47d12e8a403210b3faa",
"assets/images/Meyveli-%2520rulo-kek_100x100.jpg": "dadf8eaa32e6cde300a2a21ee9473880",
"assets/images/Meyveli-Rulo-Pasta-Tarifi.jpg": "09b2e3530c513bfa231ecfc48d21ff48",
"assets/images/Oreolu-dondurma.jpg": "24d808393fd8df8693b4c16babe54a24",
"assets/images/Oreolu-dondurma_100x100.jpg": "382640af917b7fbfa663ad251cf490d5",
"assets/images/ORIJINAL-CHEESECAKE-TAR%25C4%25B0F%25C4%25B0.jpg": "d16d181feb2fdfebb9103d6f4b18eb99",
"assets/images/ORIJINAL-CHEESECAKE-TAR%25C4%25B0F%25C4%25B0_100x100.jpg": "74184c24c2264d7a2fc02fcc88ed0791",
"assets/images/pancake-tarifi.jpg": "6e6ea8632e86dd90e2b1bc360c44d37d",
"assets/images/pancake-tarifi_100x100.jpg": "4641c1a1cfc7638d45c848732a9f9048",
"assets/images/tarcin-sekerli-snickerdoodle-kurabiyesi.jpg": "643f2df57150873608c99cd9421dc4f2",
"assets/images/tarcin-sekerli-snickerdoodle-kurabiyesi_100x100.jpg": "c957d77a364d656e758ac127b504c5dd",
"assets/NOTICES": "757c13f5a158752e90f68a687cb69d04",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"build/web/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"build/web/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"build/web/assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"build/web/assets/NOTICES": "a343d01e8cc8e460d0526fb92f70b5f9",
"build/web/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"build/web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"build/web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"build/web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"build/web/index.html": "23ecd66bcc4a7581a43ae96ec3b53345",
"/": "4385c2f64bc1dd47a8754cd405f4ccac",
"build/web/main.dart.js": "8a87d40758adeb287a8c1c0a8318696e",
"build/web/manifest.json": "413c4532dcafd9c5a1da281130bab0eb",
"build/web/version.json": "1f308f6516a18ecd7674c9a450a742cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "5da8a21646daed04aa0867e6670a125b",
"ios/Flutter/AppFrameworkInfo.plist": "a3fe1631377200e1c450eb0c7c59b011",
"ios/Flutter/Debug.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"ios/Flutter/flutter_export_environment.sh": "0b40e2f82c413f5cbb1578b36adff074",
"ios/Flutter/Generated.xcconfig": "f986f8a0b9f493d9b1fbb19269e5a18b",
"ios/Flutter/Release.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"ios/Runner/AppDelegate.swift": "b431e1eaead2cfc3718b75ba2c5f45aa",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "31a08e429403e265cabfb31b3d65f049",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png": "c785f8932297af4acd5f5ccb7630f01c",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png": "e2b9a9fb66c6f8165a179d370eb723c0",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png": "19898f3eea0783250a0e2a20dc147827",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png": "128e30cc061e49f503f48c338a21380e",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png": "9595f5692fac4a15b50616d6549e9ed4",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png": "2adf6396c0f80a2ddc96ead2f2405220",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png": "f8e7955550407d4ec71d28e7c2d8c8c6",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png": "19898f3eea0783250a0e2a20dc147827",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png": "a34a631e106b9e7251e55fa199d34bca",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png": "27c7e24d5bfb4f14a7978883bebfaf73",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png": "27c7e24d5bfb4f14a7978883bebfaf73",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png": "7af6f2ed506e771a319d46846dde1f26",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png": "975d8a8c44f5d28ac65263294b84b0c5",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png": "c0fa6a088a2d486e4d75a012096d611b",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png": "d86de75e9341c42432a12b3d58e364b8",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json": "b9e927ac17345f2d5f052fe68a3487f9",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md": "f7ee1b402881509d197f34963e569927",
"ios/Runner/Base.lproj/LaunchScreen.storyboard": "b428258a72232cdd2cc04136ec23e656",
"ios/Runner/Base.lproj/Main.storyboard": "2b4e6b099f6729340a5ecc272c06cff7",
"ios/Runner/GeneratedPluginRegistrant.h": "51e4cefb306d339b47a67bb0477a1d27",
"ios/Runner/GeneratedPluginRegistrant.m": "7c20af7f75e9fa38e8686b147b13159a",
"ios/Runner/Info.plist": "ab3a445c3edb3f6e924b84664dfc4653",
"ios/Runner/Runner-Bridging-Header.h": "7ad7b5cea096132de13ba526b2b9efbe",
"ios/Runner.xcodeproj/project.pbxproj": "707cbfe9f8a97890084e1164cba0a659",
"ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata": "77d69f353bbf342ad71a24f69ec331ff",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "5da85f8957f771f0c1002fdc60fc4a04",
"ios/Runner.xcworkspace/contents.xcworkspacedata": "ac9a90958f80f9cc1d0d5301144fb629",
"ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"lib/main.dart": "4798ad73b989f8f85ef70933231063ad",
"main.dart.js": "7fa74cd2bfa13f58bcc83a8cc720c0f8",
"manifest.json": "32409afda986d05913f0c93a1620a68c",
"pubspec.lock": "84c48240315285b57812c541f0f325f0",
"pubspec.yaml": "e4e5d4a5e5d80b36276a07e1da6bfb44",
"README.md": "d9fec75372da6c786d1b533b9e26def0",
"test/widget_test.dart": "b935758c242109475af672c9117d63e4",
"version.json": "33c704ec55d25ef7330f7b62e52e0396",
"web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/index.html": "4385c2f64bc1dd47a8754cd405f4ccac",
"web/manifest.json": "413c4532dcafd9c5a1da281130bab0eb",
"web.iml": "e0f10da35b9e41eee205c76b23f0f835"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
