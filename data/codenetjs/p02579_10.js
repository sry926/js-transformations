(async () => {
    let input = '';
    for await (const chunk of process.stdin) input += chunk;
    const lines = input.split(/\n/);
    const [h, w] = lines[0].split(/\s/).map(v => +v);
    const [ch, cw] = lines[1].split(/\s/).map(v => v - 1);
    const [dh, dw] = lines[2].split(/\s/).map(v => v - 1);
    const counts = lines.slice(3, h + 3).map(line => line.split('').slice(0, w).map(c => c == '#' ? -1 : Infinity));

    let que = {0: [], 1: []};
    que[0].push([ch, cw, 0]);
    while(que[0].length || que[1].length){
        if(!que[0].length){
            que[0] = que[1];
            que[1] = [];
        }
        const [x, y, count] = que[0].pop();

        if(x < 0)continue;
        if(x >= h)continue;
        if(y < 0)continue;
        if(y >= w)continue;
        if(counts[x][y] > count){
            counts[x][y] = count;
            if(x == dh && y == dw)break;
        }else{
            continue;
        }
        
        que[0].push([x - 1, y, count]);
        que[0].push([x + 1, y, count]);
        que[0].push([x, y - 1, count]);
        que[0].push([x, y + 1, count]);
        for(let i = -2; i <= 2; i++){
            for(let j = -2; j <= 2; j++){
                que[1].push([x + i, y + j, count + 1]);
            }
        }
    }

    if(counts[dh][dw] == Infinity){
        console.log(-1);
    }else{
        console.log(counts[dh][dw]);
    }

})();
