function variabelObject(){
    var mhs = {
        nama: 'Udin',
        matkul: 'Fisika',
        nilai: '99'
    }

    for(var x in mhs){
        console.log(x,":",mhs[x])
    }
}

variabelObject()