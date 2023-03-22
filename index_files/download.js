var softwareServer = "./"
// var softwareServer = "https://static-xthinking-download.oss-cn-shenzhen.aliyuncs.com/software";
var softwareServer = "./"
// var resourceServer = "https://static-xthinking-download.oss-cn-shenzhen.aliyuncs.com/resource";

var software = [
    {
        id: 37,
        name: "GeoGebra Calculator",
        src: softwareServer + "/images/GeoGebraCalculator.png",
        detail: "GeoGebra Calculator 是一款免费的数学教学软件， 用于绘图计算, 几何作图, 白板协作等等。GeoGebra是自由且跨平台的动态数学软件，提供各级教育使用，包含了几何、代数、表格、图形、统计和微积分，集中在一个容易使用的软件。曾获得数个欧洲和美国的教育软件大奖。其绘图的基本元素包括点，直线，线段，多边形，向量，圆锥曲线和函数。",
        download: [
            {
                name: '编写代码',
                src: 'https://www.geogebra.org/calculator?lang=zh-CN'
            }
        ]
    },
    {
        id: 36,
        name: "DeepL Translator",
        src: softwareServer + "/images/DeepLTranslator.png",
        detail: "DeepL Translator 是一款来自德国的翻译工具，由总部位于德国科隆的DeepLGmbH推出的免费神经机器翻译服务。根据WIRED的快速测试结果,DeepL的翻译表现确实丝毫不逊色于那些高阶竞争者,在很多情况下甚至超过了他们,翻译出来的文本阅读起来往往要流畅得多;除此之外，DeepL在翻译上述语言时采用了语言等效性原理，其会先在后台翻译作英语，然后再翻译成另一种语言。",
        download: [
            {
                name: '编写代码',
                src: 'https://www.deepl.com/translator#en/zh/'
            }
        ]
    },
    {
        id: 35,
        name: "Kaggle 代码在线编辑器 ",
        src: softwareServer + "/images/kaggle.png",
        detail: "Kaggle 是一个美国的在线编程网站，提供了在线运行Python Jupyter Notebook代码的基本功能，这个网站的的好处在于它会告诉你测试数据以及你的输出和正确的输出是什么，方便对大数据进行研究学习。另外它是支持在线编辑，还提供了一个在线运行环境，可以直接看到运行结果。特别适合于数据分析和数据挖掘的学习和使用。",
        download: [
            {
                name: '编写代码',
                src: 'https://www.kaggle.com/code'
            }
        ]
    },
    {
        id: 34,
        name: "Leetcode 代码在线编辑器 ",
        src: softwareServer + "/images/LeetCode.png",
        detail: "LeetCode 是一个美国的在线编程网站，提供了在线评测题目和在线编写代码的基本功能，这个网站的的好处在于它会告诉你测试数据以及你的输出和正确的输出是什么，方便大家调试学习。另外它是支持在线编辑，还提供了一个在线运行环境，可以直接看到运行结果。另一个很好的地方在于提供了2个独立的代码窗口，分别编译运行。一个自己玩的开发窗口，一个提交代码的窗口，可以在第一个窗口里测试各种拿不准的功能点。",
        download: [
            {
                name: '编写代码',
                src: 'https://leetcode-cn.com/playground/new/empty/'
            }
        ]
    },
    {
        id: 33,
        name: "Jetbrains CLion",
        src: softwareServer + "/images/clion.jpg",
        detail: "Jetbrains CLion 是一款专为开发C及C++所设计的跨平台IDE。它是以IntelliJ为基础设计的，包含了许多智能功能来提高开发人员的生产力。CLion帮助开发人员使用智能编辑器来提高代码质量、自动代码重构并且深度整合CMake编译系统，从而提高开发人员的工作效率。",
        download: [
            {
                name: 'Windows',
                src: softwareServer + '/package/CLion-2021.3.2.exe'
            },
            {
                name: 'macOS(Intel芯片版) ',
                src: softwareServer + '/package/CLion-2021.3.2.dmg'
            },
            {
                name: 'macOS(苹果芯片版)',
                src: softwareServer + '/package/CLion-2021.3.2-aarch64.dmg'
            }
        ]
    },
    {
        id: 32,
        name: "Geany",
        src: softwareServer + "/images/Geany.png",
        detail: "Geany是一个小巧的使用GTK+2开发的跨平台的开源集成开发环境，以GPL许可证分发源代码，是免费的自由软件。它支持基本的语法高亮、代码自动完成、调用提示、插件扩展。支持多种编程语言脚本。该软件小巧、启动迅速。如果是用来学习的话Geany会给你带来不一样的体验。",
        download: [
            {
                name: 'MinGW-for-Windows',
                src: softwareServer + '/package/msys2-x86_64-20210604.exe'
            },
            {
                name: 'Windows',
                src: softwareServer + '/package/geany-1.38_setup.exe'
            },
            {
                name: 'macOS',
                src: softwareServer + '/package/geany-1.38_osx-3.dmg'
            }
        ]
    },
    {
        id: 31,
        name: "Java",
        src: softwareServer + "/images/jdk-16.0.1_windows-x64_bin.png",
        detail: "Java 是由 Sun Microsystems 公司于 1995 年 5 月推出的 Java 面向对象程序设计语言和 Java 平台的总称。由 James Gosling和同事们共同研发，并在 1995 年正式推出。后来 Sun 公司被 Oracle （甲骨文）公司收购，Java 也随之成为 Oracle 公司的产品。",
        download: [
            {
                name: 'Windows',
                src: softwareServer + '/package/jdk-16.0.1_windows-x64_bin.exe'
            },
            {
                name: 'macOS',
                src: softwareServer + '/package/jdk-16.0.2_osx-x64_bin.dmg'
            }
        ]
    },
    {
        id: 30,
        name: "SF Symbols 3",
        src: softwareServer + "/images/sf-symbols.png",
        detail: "SF Symbols 3 是苹果公司为设计者提供的一套完整的、基于矢量的图标库。它引入了 600 多个新的符号、增强的颜色自定义功能、具有渲染和颜色配置控件的新检查器，以及符号自定义功能的改进。用户使用它可以凭借其与周围文本的自动对齐和对多字重、多尺寸的支持，将其整合到自己的应用中，从而简化用户界面的布局。",
        download: [
            {
                name: 'macOS',
                src: softwareServer + '/package/SF-Symbols-3.1.dmg'
            }
        ]
    },
    {
        id: 29,
        name: "Xcode",
        src: softwareServer + "/images/xcode.png",
        detail: "Xcode 是运行在操作系统 macOS 上的集成开发工具，由 Apple Inc 开发。Xcode 是开发 macOS 和 iOS 应用程序的最快捷的方式。Xcode 具有统一的用户界面设计，编码、测试、调试都在一个简单的窗口内完成。Xcode 运行于苹果公司的 macOS 操作系统下，是苹果公司向开发人员提供的集成开发环境，用于开发 macOS、iOS 的应用程序。",
        download: [
            /*{
                name: '安装教程',
                src: softwareServer + '/txt/%E5%AE%89%E8%A3%85%E8%AF%B4%E6%98%8E.docx'
            },*/
            {
                name: 'macOS',
                // src: softwareServer + '/package/Xcode_12.5.1.xip'
                src: 'https://apps.apple.com/cn/app/xcode/id497799835'
            }
        ]
    },
    {
        id: 28,
        name: "Git",
        src: softwareServer + "/images/Git.png",
        detail: "Git是一款免费、开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。Git是一个开源的分布式版本控制系统，用以有效、高速的处理从很小到非常大的项目版本管理。Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。Linus 开始着手开发 Git 是为了作为一种过渡方案来替代，后者之前一直是 Linux 内核开发人员在全球使用的主要源代码工具。开放源码社区中的有些人觉得其他软件并不适合开放源码社区的工作，因此 Linus 决定着手研究许可证更为灵活的版本控制系统。",
        download: [
            {
                name: 'Windows',
                src: softwareServer + '/package/Git-2.31.1-64-bit.exe'
            },
            {
                name: 'macOS',
                src: softwareServer + '/package/git-2.6.2-intel-universal-mavericks.dmg'
            }
        ]
    },
    {
        id: 27,
        name: "Beekeeper Studio",
        src: softwareServer + "/images/BeekeeperStudio.png",
        detail: "BeeKeeper Studio 是一款开源免费的跨平台 SQL 编辑器和数据库管理应用程序，它适用于 Windows 平台和 macOS 平台。具有语法高亮显示的自动完成 SQL 查询编辑器，选项卡式界面，可执行多个任务，排序和过滤表数据以查找所需内容和保存查询供以后使用等多个实用功能。是比较好用的一款开源免费的跨平台数据库编辑器和数据库管理应用程序。",
        download: [
            {
                name: 'Windows',
                src: softwareServer + '/package/Beekeeper-Studio-Setup-1.11.6.exe'
            },
            {
                name: 'macOS',
                src: softwareServer + '/package/Beekeeper-Studio-1.11.6.dmg'
            }
        ]
    },
    {
        id: 26,
        name: "Xftp",
        src: softwareServer + "/images/xftp.jpg",
        detail: "Xftp是一个功能强大的SFTP、FTP 文件传输软件。使用了Xftp以后，MS Windows用户能安全地在UNIX/Linux和Windows PC之间传输文件。Xftp能同时适应初级用户和高级用户的需要。它采用了标准的Windows风格的向导，它简单的界面能与其他Windows应用程序紧密地协同工作，此外它还为高级用户提供了众多强劲的功能特性。",
        download: [
            {
                name: 'Windows',
                src: softwareServer + '/package/Xftp-7.0.0063p.exe'
            }
        ]
    },
    {
        id: 25,
        name: "Xshell",
        src: softwareServer + "/images/xshell.png",
        detail: "Xshell是一个强大的安全终端模拟软件，它支持SSH1, SSH2, 以及Microsoft Windows 平台的TELNET 协议。Xshell通过互联网到远程主机的安全连接以及它创新性的设计和特色帮助用户在复杂的网络环境中享受他们的工作。",
        download: [
            {
                name: 'Windows',
                src: softwareServer + '/package/Xshell-7.0.0065p.exe'
            }
        ]
    },
    /*{
        id: 24,
        name: "Navicat for MySQL",
        src: softwareServer + "/images/navicat.jpg",
        detail: "Navicat for MySQL是一套管理和开发MySQL或MariaDB的理想解决方案，支持单一程序，可同时连接到MySQL和MariaDB。这个功能齐备的前端软件为数据库管理、开发和维护提供了直观而强大的图形界面，给MySQL或MariaDB新手以及专业人士提供了一组全面的工具。",
        download: [
            {
                name: 'Windows',
                src: softwareServer + '/package/Navicat%20for%20windows.zip'
            },
            {
                name: 'macOS',
                src: softwareServer + '/package/Navicat%20for%20MySQL%2012.1.19.dmg'
            }
        ]
    },*/
    {
        id: 23,
        name: "MySQL",
        src: softwareServer + "/images/mysql.jpg",
        detail: "MySQL是一个关系型数据库管理系统，由瑞典MySQL AB 公司开发，属于 Oracle 旗下产品。MySQL 是最流行的关系型数据库管理系统之一。",
        download: [
            {
                name: 'Windows',
                src: softwareServer + '/package/mysql-8.0.24-winx64.zip'
            },
            {
                name: 'macOS',
                src: softwareServer + '/package/mysql-8.0.24-macos11-x86_64.dmg'
            }
        ]
    },
    {
        id: 22,
        name: "ScratchJr",
        src: softwareServer + "/images/scratchJr.jpg",
        detail: "ScratchJr是Scratch编程语言中的一款专门为学前儿童开发的iPad应用,目前也有android应用,适合5-7岁孩子学习编程。",
        download: [
            {
                name: 'Android',
                src: softwareServer + '/package/scratchjr.android_apps.apk'
            },
            {
                name: 'iOS',
                src: 'https://apps.apple.com/cn/app/scratchjr/id895485086'
            }
        ]
    },
    {
        id: 21,
        name: "Visual Studio Code",
        src: softwareServer + "/images/vscode.png",
        detail: "编辑器集成了所有一款现代编辑器所应该具备的特性，包括语法高亮（syntax high lighting），可定制的热键绑定（customizable keyboard bindings），括号匹配（bracket matching）以及代码片段收集（snippets）。Somasegar 也告诉笔者这款编辑器也拥有对 Git 的开箱即用的支持。",
        download: [
            {
                name: 'Windows',
                src: softwareServer + '/package/VSCodeUserSetup-x64-1.52.1.exe'
            },
            {
                name: 'macOS',
                src: softwareServer + '/package/VSCode-darwin_2.zip'
            }
        ]
    },
    {
        id: 20,
        name: "VEX Pro V5",
        src: softwareServer + "/images/VEXcodeProV5.png",
        detail: "VEX Pro V5 是 VEX ROBOTICS COMPETITION WORLD 专业版的应用程序编程平台。内附竞赛模板助你应对赛事挑战。除竞赛模板外，还包含电机、底盘、运算符等样例程序模板，帮助用户快速起步，学习编程技巧。它拥有非常多的特定语句块，使机器人编程前所未有的简单，从而使用户更好地专注于实验和探索编程本身。",
        download: [
            {
                name: 'Windows',
                src: softwareServer + '/package/VEXcodeProV5_2_0_1.msi'
            },
            {
                name: 'macOS',
                src: softwareServer + '/package/VEXcodeProV5_2_0_1.dmg'
            }
        ]
    },
    {
        id: 19,
        name: "Fritzing",
        src: softwareServer + "/images/Fritzing1.png",
        detail: "Fritzing是一款非常不错的Arduino电路开发软件。该软件的主要功能就是将以前PCB布局工程师在干的事情简化了，你只要进行“拖拖拉拉”的操作就能完成复杂的电路设计。当然，你可以用该软件制作电路原理图和PCB。设计师，艺术家，研究人员和爱好者都可以通过该软件让屋里原型进一步得到实际的产品。可以说，它是一款非常不错的Arduino电路开发软件，支持面包板，Arduino仿真，拥有丰富的元件库，并支持原理图和PCB电路。",
        download: [
            {
                name: 'Windows',
                src: softwareServer + '/package/fritzing.0.9.4.64.pc_and_dll.zip'
            },
            {
                name: 'macOS',
                src: softwareServer + '/package/fritzing.0.9.4.64.mac.dmg'
            }
        ]
    },
    {
        id: 18,
        name: "网易MuMu模拟器",
        src: softwareServer + "/images/mumu.jpg",
        detail: "网易MuMu模拟器(安卓模拟器)是网易官方推出的一款运行在 Windows / macOS 系统下的双平台安卓模拟器。网易MuMu模拟器操作简单功能强大，可以兼容 AMD/Intel处理器，具备全面兼容、操作流畅、智能操作等特点。随着手机行业的高速发展，作为电脑端与手机应用桥梁的安卓模拟器，也已经变成了独立的行业，越来越多的安卓模拟器出现在用户的视野，面对几十种选择，该模拟器性能最好，兼容性最佳，运行速度最快，稳定性最高，资源占用率最低的。",
        download: [
            {
                name: 'Windows',
                src: softwareServer + '/package/nemu-1.26.1.1-0622172549.exe'
            },
            {
                name: 'macOS',
                src: softwareServer + '/package/NemuInstaller-20200927.dmg'
            }
        ]
    },{
        id: 17,
        name: "FreeCAD",
        src: softwareServer + "/images/FreeCAD.png",
        detail: "FreeCAD是一个基于OpenCASCADE的开源CAD/CAE工具。OpenCASCADE是一套开源的CAD/CAM/CAE几何模型核心，来自法国Matra Datavision公司，是著名的CAD软件EUCLID的开发平台。FreeCAD作为一个开源软件，尤其是FreeCAD很多的开发者不是专业的程序员，而是在某一行业的设计者，他们的程序思路都是从自己使用角度出发。全世界将近几万人在参与其中，他的二次发支持现在流行的Python语言，也便于非计算机专业程序员开发自己的程序。",
        download: [
            {
                name: 'Windows 64',
                src: softwareServer + '/package/FreeCAD-0.17.13541.9948ee4-WIN-x64-installer.exe'
            },
            {
                name: 'Windows 32',
                src: softwareServer + '/package/FreeCAD-0.17.13528.5c3f7bf-WIN-x86-installer.exe'
            },
            {
                name: 'macOS',
                src: softwareServer + '/package/FreeCAD_0.17-13541.9948ee4-OSX-x86_64-Qt5%281%29.dmg'
            }
        ]
    },{
        id: 16,
        name: "Dev C++ / XCode",
        src: softwareServer + "/images/Dev_C%2B%2B.png",
        detail: "Dev C++ / XCode 是一款 Windows / MacOS 平台上非常好用的 C++ 开发工具，他的定位是方便学习者快速的运行示例代码，不用浪费大量时间进行开发环境的搭建。它不需要安装额外的语言环境就可以执行一些代码， 还能立即查看运行后的效果。我们用它进行代码演示、代码测试等，简单快速，不需要安装各种环境，非常好用！功能的编辑器与语法高亮显示。可编辑的代码预设新文档而不必重新编写。完全编码支持，自定义运行编译器。",
        download: [
            {
                name: 'Windows',
                src: softwareServer + '/package/Dev-Cpp%205.11%20TDM-GCC%204.9.2%20Setup.exe'
            },
            {
                name: 'macOS',
                src: 'https://apps.apple.com/cn/app/xcode/id497799835'
                // src: softwareServer + '/package/CodeRunner_3.1_WaitsUn.com.dmg'
            }
        ]
    },{
        id: 14,
        name: "VEXcode V5",
        src: softwareServer + "/images/VEXcode_v5.png",
        detail: "VEXcode V5 是 VEX 为全球机器人和编程爱好者、学习者、教育者开发的VEX应用程序编程平台。VEXcode 对于编程软件的多重功能需求得到满足，用户可通过连接 VEX 机器人硬件实时查看编程成果，VEXcode 编程平台遵循学生认知规律，满足不同水平学生的编程需求，为学生提供更加真实的编程体验。",
        download: [
            {
                name: 'Windows',
                src: softwareServer + '/package/VEXcodeV5-20201110.msi'
            },
            {
                name: 'macOS',
                src: softwareServer + '/package/VEXcodeV5-20201110.dmg'
            }
        ]
    },
    {
        id: 13,
        name: "Anaconda",
        src: softwareServer + "/images/Anaconda.png",
        detail: "Anaconda 是 Python 语言等的一个发行版，是一个供数据科学家、IT 专家，和商业领袖使用的数据科学平台。针对数据科学，它有超过300个软件包，因此它迅速攀升为最好的数据平台之一。它支持 Windows, Mac 操作系统，并且包含了众多流行的科学计算、数据分析的 Python 包和库等。",
        download: [
            {
                name: 'Windows',
                src: softwareServer + '/package/Anaconda3-2021.05-Windows-x86_64.exe'
            },
            {
                name: 'macOS',
                src: softwareServer + '/package/Anaconda3-2021.05-MacOSX-x86_64.pkg'
            }
        ]
    },
    {
        id: 12,
        name: "RoboMaster Champion",
        src: softwareServer + "/images/RoboMasterChampion.png",
        detail: "RM赛事引擎（RoboMaster Champion）是以机器人赛事举办与参加为主体的软件解决方案，配套支持 RoboMaster 青少年挑战赛的裁判系统，增加全新UI设计的桌面端FPV操作界面，支持创建比赛房间进行多人对战，支持单人连接进行自定义程序装载与验证，提高机器人携带自定义程序数量上限到8个，增加适配EP工程机器人的机械臂操作模块，单人连接沿袭了Robomaster App传统的直连和路由两种连接方式",
        download: [
            {
                name: 'Windows 64',
                src: softwareServer + '/package/DJIEducationHub.exe'
            }
        ]
    },
    {
        id: 11,
        name: "RoboMaster",
        src: softwareServer + "/images/RoboMaster.png",
        detail: "RoboMaster 是一款基于 DJI RoboMaster 比赛打造的教育机器人拓展套装，融入完整教育解决方案体系。RoboMaster 加入自研舵机、机械臂、机械爪等模块，开放官方 SDK，兼容第三方开源平台硬件及第三方传感器，并且配套有精心编制的机器人课程体系。RoboMaster for Windows 需要 Windows7 64 位或更高版本。RoboMaster for Mac 需要 MacOS10.13或更高版本。",
        download: [
            {
                name: 'Windows 64',
                src: softwareServer + '/package/1583391719328-RoboMaster_x64_Installer.exe'
            },
            {
                name: 'macOS',
                src: softwareServer + '/package/1583391532611-RoboMaster.pkg'
            }
        ]
    },
    {
        id: 1,
        name: "Magic Scratch",
        src: softwareServer + "/images/magic-scratch.png",
        detail: "Magic Scratch是魔法图书馆对美国麻省理工的Scratch儿童编程软件进行二次开发的汉化版软件， 这是一套图形化的程序设计软件，适合6-15岁的中国孩子使用的程序设计入门软件。Magic Scratch中加入了小刺猬PP的可爱卡通形象，让孩子能够利用程序亲自创造可爱的卡通形象，从而增添孩子学习编程的兴趣。Magic Scratch只需要通过简易的鼠标拖拉方式，将指令从程序指令区移进脚本区，就可以完成简单的程序编写，每个6岁以上的孩子都能够在短时间内轻松掌握编程的技巧。它可以让孩子轻松地规划程序设计的剧情、动画、游戏、音乐等，让孩子在不知不觉中，学习程序语言的概念，进而增加推理与逻辑概念，强化孩子的思维。",
        download: [
            {
                name: '安装教程',
                type: 1,
                src: softwareServer + '/mp4/ScratchAZ.mp4'
            },
            {
                name: 'Windows',
                src: softwareServer + '/package/Magic Scratch_windows_2.5.0.exe'
            }
        ]
    },
    {
        id: 2,
        name: "Magic Lab",
        src: softwareServer + "/images/yunxuexi.png",
        detail: "【M+ Lab】云学习平台，是魔法编程实验室针对6-18岁的创新型青少年提供的云端学习平台，与魔法编程教师端功能互通，集合编程软件、复习系统、题库系统、作业系统等一站式学习功能！",
        download: [
            {
                name: 'Windows',
                src: softwareServer + '/package/Day1.23%20%E4%BA%91%E5%AD%A6%E4%B9%A0%E5%B9%B3%E5%8F%B0.exe'
            }, {
                name: 'macOS',
                src: softwareServer + '/package/Day1.26%20%E4%BA%91%E5%AD%A6%E4%B9%A0%E5%B9%B3%E5%8F%B0.dmg'
            }
        ]
    },
    {
        id: 3,
        name: "Google Chrome浏览器",
        src: softwareServer + "/images/chrome.png",
        detail: "Google Chrome是一款由Google公司开发的网页浏览器，该软件稳定性、速度、安全性兼具，可谓是上网神器，而其便捷的开发者功能更是为广大web开发者所喜爱，JavaScript借助该浏览器进行学习可谓是锦上添花。Chrome的代码控制台可以快速地检验程序的运行结果，帮助孩子快速地理解程序代码，Chrome还有代码纠错功能，帮助孩子更好地找到程序错误点，从而解决问题，提升孩子的成就感。",
        download: [
            {
                name: '安装教程',
                type: 1,
                src: softwareServer + '/mp4/googleAZ.mp4'
            },
            {
                name: 'Windows',
                src: softwareServer + '/package/Chrome%E6%B5%8F%E8%A7%88%E5%99%A8.exe'
            },
            {
                name: 'macOS',
                src: softwareServer + '/package/googlechrome_mac_60.0.3112.101.dmg'
            }
        ]
    },
    {
        id: 4,
        name: "WinRAR",
        src: softwareServer + "/images/winrar.png",
        detail: "WinRAR是一款功能强大的压缩包管理器，它是档案工具RAR 在 Windows 环境下的图形界面。WinRAR可以让你根据需要，将压缩后的文件保存为ZIP或RAR的格式，而压缩时间根据压缩程度的不同，可以自行调整。使用广泛，界面友好，使用方便，在压缩率和速度方面都有很好的表现。",
        download: [
            {
                name: 'Windows 64',
                src: softwareServer + '/package/winrar-x64-5.50.0.0-scp.exe'
            },
            {
                name: 'Windows 32',
                src: softwareServer + '/package/wrar_5.50.0.0_scp.exe'
            }
        ]
    },
    {
        id: 5,
        name: "Python",
        src: softwareServer + "/images/python.png",
        detail: "Python一种面向对象的解释型计算机程序设计语言，它是免费且开源的，它可以在不同的计算机上运行，比如windows电脑、苹果电脑以及Linux的计算机。Python的设计哲学是“优雅”、“明确”、“简单”，Python程序是容易读、容易编写且容易理解的，是小朋友比较容易掌握的。",
        download: [
            {
                name: 'Windows',
                src: softwareServer + '/package/python-3.6.6-amd32.exe'
            },
            {
                name: 'macOS',
                src: softwareServer + '/package/python-3.6.3-macosx10.6.pkg'
            }
        ]
    },
    {
        id: 6,
        name: "Sublime Text编辑器",
        src: softwareServer + "/images/sublime-text.png",
        detail: "Sublime Text是一个代码编辑器，具有漂亮的用户界面和强大的功能，支持多种编程语言。该软件支持语法高亮、拥有优秀的代码自动完成功能。孩子的好奇心往往比较大，很容易造成代码丢失，软件崩溃，而Sublime拥有编辑状态恢复的能力，就算修改了文件后没有及时保存，退出后打开依然能够恢复原有状态，完美解决了这一难题。Sublime Text软件安装包小，安装方便。",
        download: [
            {
                name: '安装教程',
                type: 1,
                src: softwareServer + '/mp4/STAZ.mp4'
            },
            /*{
             name: '汉化补丁',
             src: '//download.xthinking.net/User.zip'
             },*/
            {
                name: 'Windows 64',
                src: softwareServer + '/package/Sublime%20Text%20Build%203211%20x64%20Setup%201217.exe'
            },
            {
                name: 'Windows 32',
                src: softwareServer + '/package/Sublime%20Text%20Build%203211%20Setup%201217.exe'
            },
            {
                name: 'macOS',
                src: softwareServer + '/package/Sublime%20Text%20Build%203211%201217.dmg'
            }
        ]
    },
    {
        id: 7,
        name: "Magic Arduino编辑器(适用于硬件开发者课程)",
        src: softwareServer + "/images/magic-arduino.png",
        detail: "魔法编程硬件开发者 Magic Arduino 是魔法编程针对智能硬件编程所二次开发的汉化版编程软件，是孩子学习智能硬件编程首选的创意工具，非常适合智能硬件程序代码的编译、调试等功能。",
        download: [
            {
                name: 'Windows',
                src: softwareServer + '/package/Day%208.8-2%20Magic%20Arduino.exe'
            }
        ]
    },
    {
        id: 8,
        name: "Code::Blocks编辑器(适用于C++课程)",
        src: softwareServer + "/images/codeblocks.png",
        detail: "Code::Blocks 是一个开放源码的全功能的跨平台C/C++集成开发环境。 Code::Blocks是开放源码软件。Code::Blocks由纯粹的C++语言开发完成，非常适合C++程序代码编写、调试等功能。",
        download: [
            {
                name: 'Windows',
                src: softwareServer + '/package/codeblocks-17.12mingw-setup.exe'
            }
        ]
    }
];
var type = '';
var searchInfo = '';
$(function () {
    $('#software').on('click', '.item-btn > span', function (e) {
        if (e.currentTarget.dataset.resourceUrl) {
            window.open(e.currentTarget.dataset.resourceUrl)
        }
    });
    $('.type-source').on('mouseenter', '.cont-item', function (e) {
        $(this).find('.item-img').css({
            '-webkit-box-shadow': '0 4px 14px #edf0f2',
            '-moz-box-shadow': '0 4px 14px #edf0f2',
            'box-shadow': '0 4px 14px #edf0f2'
        })
        $(this).find('.download').css('color', '#3790ff');
    });
    $('.type-source').on('mouseleave', '.cont-item', function (e) {
        $(this).find('.item-img').css({
            '-webkit-box-shadow': 'none',
            '-moz-box-shadow': 'none',
            'box-shadow': 'none'
        })
        $(this).find('.download').css('color', '#47494a');
    });
    //根据点击的课程类型显示对应的课程
    $('.resource-type>li').on('click', function () {
        var id = $(this).attr('data-id');
        $('.type-item').each(function () {
            if ($(this).attr('id') == id) {
                $(this).css('display', 'block');
            } else {
                $(this).css('display', 'none');
            }
        })
        //处理li的状态
        $('.resource-type>li').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
    });
    $('#iconSearch').on('click', function () {
        searchInfo = $('#searchInfo').val();
        navData();
        page.pageNo = 1;
        sourceCenter(page);
    });
    $('#searchInfo').on('change', function () {
        searchInfo = $(this).val();
    });
    var total, pageSize, pageNo, count;
    var createPagee = function (total, pageSize, pageNo) {
        this.total = total;
        this.pageSize = pageSize;
        this.pageNo = pageNo;
    };
    var page = new createPagee(total, 15, 1);

    // 执行软件下载页面
    showSoftware(software);

    // 素材库 点击
    $('.sourceCenter').click(function () {
        // navData();
        // sourceCenter(page);
    });

    // 页面开始状态 loading
//          $('.source-cont').css('display','none');
    //loading.show('source-cont');

    // nav click
    $('ul.source-main').on('click', 'li', function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.source-cont').html("");
        $('.source-second').html("");
        $('.page').html("");
        loading.show('source-cont');

        var id = $(this).attr('data-id');
        type = $(this).attr('data-type');
        page.pageNo = 1;
        if (id && type) {
            navSecCenter(id);
            sourceCenter(page, type);
        } else {
            sourceCenter(page);
            $('#sourceSec').html('');
        }
    });

    // navSecond click
    $('ul.source-second').on('click', 'li', function () {
        $('.source-cont').html("");
        $('.page').html("");
        loading.show('source-cont');
        $(this).addClass('active').siblings().removeClass('active');
        type = $(this).attr('data-type');
        page.pageNo = 1;
        if (type) {
            sourceCenter(page, type);
        } else {
            $('#sourceNav>li').each(function () {
                if ($(this).hasClass('active')) {
                    type = $(this).attr('data-type');
                }
            })
            if (type) {
                sourceCenter(page, type);
            }
        }
    });
    pageMethod(page);
});
// 素材库，请求全部数据，渲染
function sourceCenter(page, type) {
    var m = {
        url: Service.Material.list,//ctx + "/api/material/list"
        data: {
            name: searchInfo,
            parentIds: type,
            pageNo: page.pageNo,
            pageSize: page.pageSize
        },
        callBack: function (res) {
            if (res.code == "0") {
//                    loading.hide();
                $('.source-cont').css('display', 'block');
                $('#sourceCont').html("");
                showAllData(res.data, type);
                $('.page').html("");

                count = Math.ceil(res.data.total / res.data.pageSize);
                if (count > 1) {
                    $(".page").createPage({
                        pageCount: count, // 总页数
                        current: res.data.pageNo,   // 当前页
                        backFn: function (cur) {

                        }
                    });
                }
            }
        }
    };
    CMC.send(m, {withoutHeader: true});
};

// navSec
function navSecCenter(id) {
    var m = {
        url: Service.Material.categories,//ctx + "/api/material/cates"
        data: {
            name: searchInfo
        },
        callBack: function (res) {
            if (res.code == "0") {
                $('#sourceSec').removeClass('hide');
                $('#sourceSec').html("");
                $('#sourceSec').append('<li class="active">全部</li>');
                $('#sourceCont').html("");
                $('.page').html("");
                for (var i = 0; i < res.data.length; i++) {
                    if (res.data[i].id == id) {
                        navSecData(toTree(res.data), id);
                    }
                }
            }
        }
    };
    CMC.send(m, {withoutHeader: true, asy: false});
};

// nav
function navData() {
    var m = {
        url: Service.Material.categories,//ctx + "/api/material/cates"
        data: {
            name: searchInfo
        },
        callBack: function (res) {
            if (res.code == "0") {
                $('#sourceNav').html("");
                $('#sourceSec').html("");
                $('#sourceNav').append('<li class="active">全部</li>');
                $('#sourceCont').html("");
                nav(toTree(res.data));
                $('.page').html("");
            } else {
                loading.hide();
                error.show(res.msg);
                $('.error-btn').click(function () {
                    error.hide();
                });
            }
        }
    };
    CMC.send(m, {withoutHeader: true, asy: false});
};

// 素材库，全部数据
function showAllData(data, type) {
    var rows = data.list;
    for (var i = 0; i < rows.length; i++) {
        if (rows[i].show) {
            addView("#sourceCont", $('#sourceLi').html(), rows[i]);
        }
    }
    $('img.lazy').lazyload({
        effect: "fadeIn"
    });
};

// navSec
function navSecData(data, id) {
    var index;
    for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        if (data[i].id == id) {
            index = i;
        }
    }
    var childList = data[index].children;
    for (var i = 0; i < childList.length; i++) {
        if (childList[i].show) {
            addView("#sourceSec", $('#sourceSecTpl').html(), childList[i]);
        }
//            addView("#sourceCont",$('#sourceLi').html(),childList[i]);
    }

}
// nav 渲染
function nav(data) {
    for (var i = 0; i < data.length; i++) {
        if (data[i].show) {
            addView("#sourceNav", $('#sourceTpl').html(), data[i]);
        }
    }
}

// 分页点击
var pageMethod = function (page) {
    $('.page').off('click', '.prevPage').on('click', '.prevPage', function (e) {
        e.stopPropagation();
        page.pageNo--;
        sourceCenter(page, type);
    });
    $('.page').off('click', '.nextPage').on('click', '.nextPage', function (e) {
        e.stopPropagation();
        page.pageNo++;
        sourceCenter(page, type);
    });
    $('.page').off('click', '.tcdNumber').on('click', '.tcdNumber', function (e) {
        e.stopPropagation();
        page.pageNo = parseInt($(this).text());
        sourceCenter(page, type);
    });
};

// 软件下载  页面展示
function showSoftware(data) {
    for (var i = 0; i < data.length; i++) {
        addView('#software', $('#firstTpl').html(), data[i]);
        var download = data[i].download;
        var id = data[i].id;
        for (var j = 0; j < download.length; j++) {
            var t = download[j].type;
            if (t == 1) {
                addView('#item-btn' + id, $('#type2Tpl').html(), download[j]);
            } else {
                addView('#item-btn' + id, $('#type1Tpl').html(), download[j]);
            }
        }
    }
    $('.cont-img>img').css({
        'border-radius': '10px'
    })
    $('img.lazy').lazyload({
        effect: "fadeIn"
    });
}

function addView(list, tpl, item) {
    var data = {};
    var typeCss = '';
    var bgUrl = '';
    var desc = '';
    if (item.fileType == 1) {
        typeCss = 'material-type-audio';
        bgUrl = resourceServer + '/images/material-free-audio-' + Math.floor(Math.random() * 4) + '.png';
        desc = '点击播放';
    } else {
        typeCss = 'material-type-pic';
        bgUrl = item.preview;
    }
    $(list).append(Mustache.render(tpl, {
        data: item,
        bgUrl: bgUrl,
        typeCss: typeCss,
        desc: desc
    }));
}
//canvas播放音频
$(document).ready(function () {

    var audioWrapStr = "<div class='audio-canvas-wrap'><canvas id='audioCanvas' width='221' height='221'></canvas><div class='audio-canvas-word'>播放中</div></div>";
    var i = 0;
    var durationTime = 10;
    var context;
    var pausePlayAudio = 0;
    var canvasCirCle;
    var audioStr;
    var materialAudio;
    var clickedObj;
    $('#sourceCont').on('click', '.material-type-audio .item-img img', function (e) {
        clickedObj = this;
        $('.audio-canvas-wrap').remove();
        $('.audio-wrap').remove();
        $('.material-type-audio .item-img img').show();
        clearInterval(canvasCirCle);
        audioStr = "<div class='audio-wrap'><audio id='materialAudio' autoplay><source src='" + e.currentTarget.dataset.resource + "' type='audio/mpeg'> 您的浏览器不支持 audio 元素。</audio></div>";
        $('body').append(audioStr);

        $(this).hide().parent().append(audioWrapStr);
        context = $("#audioCanvas")[0].getContext("2d");
        pausePlayAudio = 0;

        context.lineWidth = 5;
        i = 0;
        materialAudio = document.getElementById("materialAudio");
        setTimeout(function () {
            durationTime = parseInt(materialAudio.duration);
            render();

            function render() {
                canvasCirCle = setInterval(function () {
                    if (pausePlayAudio) return 0;
                    i--;
                    context.clearRect(0, 0, 110, 110);
                    context.beginPath();
                    context.strokeStyle = '#3790ff';
                    context.arc(110, 110, 50, 0, (2 * Math.PI) * (i / 100), false);
                    context.stroke();

                    context.beginPath();
                    context.strokeStyle = '#999';
                    context.arc(110, 110, 50, 0, (2 * Math.PI) * (i / 100), true);
                    context.stroke();

                    if (i <= -100) {
                        clearInterval(canvasCirCle);
                        $('.audio-canvas-word').text('已结束').show();
                    }
                }, durationTime * 10);
            }

            $('#audioCanvas').click(function () {
                stopPlay();
            });

            $('.audio-canvas-word').click(function () {
                stopPlay();
            });
            function stopPlay() {
                event.stopPropagation();
                pausePlayAudio = pausePlayAudio ? 0 : 1;
                /*console.log('materialAudio.ended',materialAudio.ended);*/
                if (materialAudio.ended) {
                    $(clickedObj).click();
                    return 0;
                }
                if (materialAudio.paused) {
                    materialAudio.play();
                    $('.audio-canvas-word').text('播放中');
                } else {
                    materialAudio.pause();
                    $('.audio-canvas-word').text('已暂停');
                }
            }
        }, 500)
    })

});
