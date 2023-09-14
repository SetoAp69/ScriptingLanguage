var mahasiswa =[ 
    {NIM:1,nama:"Percival",IPK:3.4  }, 
    {NIM:2, nama:"Tristan", IPK:3.7},
    {NIM:3, nama:"Mordred",IPK:2.3},
    {NIM:4, nama:"Agravain", IPK:1.4},
    {NIM:5, nama:"Morgan", IPK:3.2},
    {NIM:6, nama:"Bedivere",IPK:3.9},
    {NIM:7, nama:"Lancelot", IPK:3.3},
    {NIM:8, nama:"Gawain", IPK:3.6},
    {NIM:9, nama:"Arthur",IPK:3.7},
    {NIM:10, nama:"Galahad", IPK:2.9}
]

var mahasiswaUnggul =[];

mahasiswa.forEach(mhs=>{if(mhs.IPK>3){

    mahasiswaUnggul.push(mhs);
}})
console.log("\nArray Lama\n")
console.log(mahasiswa)
console.log("\nArray Baru\n")
console.log(mahasiswaUnggul)