$(document).ready(function(){
    // 헤더 스크롤
    $(window).scroll(function(){
        const sc = $(this).scrollTop();
        console.log(sc);
        let sctarget;

        if(sc<530){
            $('header').removeClass('header_sc');
            $('.h_aboutme, .h_skills, .h_project, .h_contactme').removeClass('nav_sc');
            $('.logo>a').text('ri0-0ri');
        }
        else if(sc >= 530 && sc < 1200){
            $('.logo>a').text('Top');
            $('header').addClass('header_sc');
            $('.h_aboutme').addClass('nav_sc');
            $('.h_aboutme').siblings().removeClass('nav_sc');
        }
        else if(sc >= 1200 && sc < 2000){
            $('.logo>a').text('Top');
            $('header').addClass('header_sc');
            $('.h_skills').addClass('nav_sc');
            $('.h_skills').siblings().removeClass('nav_sc');
        }
        else if(sc >= 2000 && sc < 3200){
            $('.logo>a').text('Top');
            $('header').addClass('header_sc');
            $('.h_project').addClass('nav_sc');
            $('.h_project').siblings().removeClass('nav_sc');
        }
        else if(sc > 3200){
            $('.logo>a').text('Top');
            $('header').addClass('header_sc');
            $('.h_contactme').addClass('nav_sc');
            $('.h_contactme').siblings().removeClass('nav_sc');
        }
    })

    // 헤더 네비게이션
    $('.nav>ul>li, .logo').click(function(e){
        e.preventDefault();
        let navname = $(this).attr('class');
        let sctarget;

        if(navname=="h_aboutme"||navname=="h_aboutme nav_sc"){
            sctarget = $('.aboutme').offset().top-200;
        }
        else if(navname=="h_skills"||navname=="h_skills nav_sc"){
            sctarget = $('.skills').offset().top-50;
        }
        else if(navname=="h_project"||navname=="h_project nav_sc"){
            sctarget = $('.project').offset().top-100;
        }
        else if(navname=="h_contactme"||navname=="h_contactme nav_sc"){
            sctarget = $('.contactme').offset().top;
        }
        else{
            sctarget = 0;
        }

        $('html, body').animate({
            scrollTop: sctarget
        }, 1000);
    })

    // 메인 버튼
    $('.bottom').click(function(){
        $('html, body').animate({
            scrollTop: $('.aboutme').offset().top-200
        }, 1000);
    })

    // 프로젝트 info 펼치기
    $('.project .view').click(function(){
        $('.project .view, .project .info').hide();
        let projectinfo = $(this).closest('.projectbox').find('.info');
        projectinfo.show();
        $(projectinfo).find('.introduction').show();
        $('.project').css("grid-template-columns", "1fr");
        $(projectinfo).find('.pront-end, .back-end, .close').hide();

        $('html, body').animate({
            scrollTop: projectinfo.offset().top-100
        }, 1000);

        // 프로젝트 info 네비게이션
        $('.project_nav>ul>li').click(function(e){
            e.preventDefault();
            $(this).siblings().removeClass('on');
            $(this).addClass('on');
    
            // 닫기
            if($(this).text().trim()=="Close"){
                $('.project .info').hide();
                $('.project').css("grid-template-columns", "1fr 1fr");
                $('.project .view').show();

                $(this).removeClass('on');
                $('.project_nav>ul>li:first-child').addClass('on');
            }
            else if($(this).text().trim()=="introduction"){
                $('.pront-end, .back-end, .close').hide();
                $(projectinfo).find('.introduction').show();
            }
            else if($(this).text().trim()=="Pront-end"){
                $('.introduction, .back-end, .close').hide();
                $(projectinfo).find('.pront-end').show();
            }
            else if($(this).text().trim()=="Back-end"){
                $('.introduction, .pront-end, .close').hide();
                $(projectinfo).find('.back-end').show();
            }
        })
    })

    // 화면 크기 변경 시 각 섹션 초기화
    $(window).resize(function(){
        $('.info').hide();
        $('.project .view').show();
    });

    // 페이지 새창에서
    $('body a').click(function(e) {
        e.preventDefault();
        var url = $(this).attr('href');
        window.open(url, '_blank');
    });

    let thismodal;
    // 사진 모달
    $('.project button').click(function(){
        thismodalbox = $(this).next();
        thismodalbox.css("display","flex");
        $('.modalbg').show();
    })
    $('.modalbg').click(function(){
        thismodalbox.hide();
        $('.modalbg').hide();
    })

    // 모달 버튼
    let modalbelt
    $('.leftbtn').click(function(){
        modalbelt = $(this).next().find('ul');
        modalbelt.animate({left:"900px"},500,function(){
            modalbelt.prepend(modalbelt.find("li").last());
            modalbelt.css({left:0})
        })
    })
    $('.rightbtn').click(function(){
        modalbelt = $(this).prev().find('ul');
        modalbelt.animate({left:"-900px"},500,function(){
            modalbelt.append(modalbelt.find("li").first());
            modalbelt.css({left:0})
        })
    })
})