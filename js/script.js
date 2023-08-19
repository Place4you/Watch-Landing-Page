

    //textlitte 
    var  timeline= gsap.timeline();
    timeline
        .from("#lowest",{
            opacity:0,
            delay:0,
            onStart:function(){
                $('#lowest').textillate({
                     in: { 
                            effect: 'fadeInUp',
                            callback:function(){
                                $('#lowest').textillate('out')
                                 }
                         },
                     out: { effect: 'fadeOutUp' } 
                    });
                 }})
    
        .from("#second-lowest",{
            opacity:0,
            delay:1,
            onStart:function(){
            $('#second-lowest').textillate({
                    in: { 
                        effect: 'fadeInUp',
                        callback:function(){
                            $('#second-lowest').textillate('out')
                                }
                        },
                    out: { effect: 'fadeOutUp' } 
                });
                }})
        
        .from("#second-top",{
            opacity:0,
            delay:1,
    
            onStart:function(){
                $('#second-top').textillate({
                        in: { 
                            effect: 'fadeInUp',
                            callback:function(){
                                $('#second-top').textillate('out')
                                    }
                            },
                        out: { effect: 'fadeOutUp' } 
                    });
                    }})
    
        .from("#top",{
            opacity:0,
            delay:1.2,
            onStart:function(){
                $('#top').textillate({
                        in: { 
                            effect: 'fadeInUp',
                            callback:function(){
                                $('#top').textillate('out')
                                    }
                            },
                        out: { effect: 'fadeOutUp'}
                    });
                    }})
    
        .to("#top-screen",{
            top: "-120%",
            delay: 1,
            duration:1,
            ease:"Power4.easeOut",
        })
    
        // .from(".navbar",{
        //     opacity: 0,
        //     y:-40,
        //     duration:0.2,
        // })
    
        .from(".hero-head h1, p",{
            opacity:0,
            color:"grey",
            scale: 1,
            duration:0.9,
            delay:0.4
        })
        .from(".hero-container button",{
            scale:0.9,
            repeat: -1,
            yoyo: "true",
            opacity:1,
            duration:1
        })
        .from(".hero-container img",{
            y:150,
            opacity:0,
            duration:0.6
        })
    