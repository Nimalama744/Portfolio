


function workout(){

    return new Promise ((resolve, reject) => {

        setTimeout (()=>{

            const workedout = false;

            if (workedout){
                resolve ("You worked out!");
            }
            else{
                reject ("You didn't work out!");
            }
        },2500)
    }
)
}

function code(){
    return new Promise ((resolve, reject) => {

        setTimeout (()=>{

            const coded = true;

            if (coded){
                resolve ("You did coding!");
            }
            else{
                reject ("You didn't code!");
            }
        },1500)
    }
)
}

function guitar(){
    return new Promise ((resolve, reject) => {

        setTimeout (()=>{

            const playguitar = false;

            if (playguitar){
                resolve ("You played guitar!");
            }
            else{
                reject ("You didn't play guitar!");
            }
        },3000)
    }
)
}

async function todo(){
    
    try{
        const workoutbox = await workout();
    console.log(workoutbox);

    const codebox = await code();
    console.log(codebox);

    const guitarbox = await guitar();
    console.log(guitarbox);
    }

    catch(error){
        console.error(error);
    }

}
todo();
