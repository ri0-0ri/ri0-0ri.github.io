$(document).ready(function(){
    // 헤더 스크롤
    $(window).scroll(function(){
        const sc = $(this).scrollTop();
        // console.log(sc);
        let sctarget;

        if(sc<530){
            $('header').removeClass('header_sc');
            $('.h_aboutme, .h_skills, .h_project, .h_contectme').removeClass('nav_sc');
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
        else if(sc > 2000){
            $('.logo>a').text('Top');
            $('header').addClass('header_sc');
            $('.h_project').addClass('nav_sc');
            $('.h_project').siblings().removeClass('nav_sc');
        }
    })

    // 헤더 네비게이션
    $('.nav>ul>li, .logo').click(function(e){
        e.preventDefault();
        let navname = $(this).attr('class');
        let sctarget;

        if(navname=="h_aboutme"){
            sctarget = $('.aboutme').offset().top-200;
        }
        else if(navname=="h_skills"){
            sctarget = $('.skills').offset().top-100;
        }
        else if(navname=="h_project"){
            sctarget = $('.project').offset().top;
        }
        else if(navname=="h_contectme"){
            sctarget = $('.contectme').offset().top;
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

        $('html, body').animate({
            scrollTop: projectinfo.offset().top-100
        }, 1000);

        // 프로젝트 info 네비게이션
        $('.project_nav>ul>li').click(function(e){
            e.preventDefault();
            $(this).siblings().removeClass('on');
            $(this).addClass('on');
    
            if($(this).text().trim()=="Close"){
                $('.project .info').hide();
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

})