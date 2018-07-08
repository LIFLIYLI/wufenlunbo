$('.imgs>img:nth-child(1)').addClass('current')
$('.imgs>img:nth-child(1)').siblings().addClass('enter')

let n=1
function x(n){   
    if(n>$('.imgs>img').length){
        n=n%$('.imgs>img').length 
        if(n===0){
            n=$('.imgs>img').length
        }      
    }
    return n     
}

setInterval(()=>{    
    $(`.imgs>img:nth-child(${x(n)})`).removeClass('current').addClass('leave').one('transitionend',(e)=>{
        console.log($(e.currentTarget))
        $(e.currentTarget).removeClass('leave').addClass('enter')
    })
    $(`.imgs>img:nth-child(${x(n+1)})`).removeClass('enter').addClass('current')  
    n+=1
},2000)
