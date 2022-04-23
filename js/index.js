new fullpage('#fullpage', {
    autoScrolling: true,
    scrollHorizontally: true,
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
    menu: '#menu',
    continuousVertical: true,
    onLeave: function (origin, destination, direction, trigger) {
        var loaging2 = new TimelineMax();
        loaging2.fromTo(".upper", 0.6, { autoAlpha: 0 }, { autoAlpha: 1 }, "+=0.5")
            .fromTo(".lower", 0.6, { autoAlpha: 0 }, { autoAlpha: 1 }, "-=0.6")
    },
});

document.addEventListener("DOMContentLoaded", function () {
    //箭頭click function
    var arrows = document.getElementsByClassName('arrow1');
    for (i = 0; i < arrows.length; i++) {
        arrows[i].addEventListener('click', function (e) {
            e.preventDefault();
            fullpage_api.moveSectionDown();
        });
    }
    // 動畫
    var loaging = new TimelineMax();
    loaging.fromTo(".upper h2", 0.8, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0 })
        .fromTo(".upper p", 0.8, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0 })
        .fromTo(".index_btn1", 0.8, { autoAlpha: 0, x: -40 }, { autoAlpha: 1, x: 0 }, "-=0.8")
        .fromTo(".index_btn2", 0.8, { autoAlpha: 0, x: 40 }, { autoAlpha: 1, x: 0 }, "-=0.8")
        .fromTo(".arrow", 0.8, { autoAlpha: 0, y: -20 }, { autoAlpha: 1, y: 0 })
        .fromTo(".arrow1", 0.8, { autoAlpha: 0, y: -10 }, { autoAlpha: 1, y: 0 })
        .fromTo(".action_btn1_rwd", 0.8, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, x: 0 }, "-=2.2")
        .fromTo(".action_btn2_rwd", 0.8, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, x: 0 }, "-=2.2")
});
