import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const User = () => {
    //API'DEN VERI CEKECEGIZ. FETCH, ASYNC-AWAIT VEYA THIRD PARTY LIBR. KULLANILABILIR.
  
    //FETCH ILE ALDIGIMIZ VERILERI DOM'A BASACAGIZ. DOLAYISIYLA GLOBAL DEGISKEN KULLANIRIZ. 
  
    //GELEN VERIDE SUREKLI DEGISIM OLDUGU ICIN BUNU STATE HALINE GETIRELIM.

    const [User, setUser] = useState("abc");

    const getUser =function(){

        fetch('https://randomuser.me/api/')
        .then((res)=> res.json())
        .then((data)=>setUser(data.results[0]));
    }
    // getUser();// FONKSIYON BURAYA YAZILIRSA ILK ACILISTA VERIYI CEKER. DAHA SONRA TEKRAR CAGIRILINCA VERI TEKRAR GUNCELLENECEGI ICIN TEKRAR RENDER EDECEK. TEKRAR VERI DEGISECEK YANI SONSUZ DONGUYE GIRECEK. BUNU ENGELLEMEK ICIN COMPONENT.DID.MOUNT VEYA USE.EFFECT KULLANMAK GEREKIR.
    useEffect(() => {
      getUser();    
       //MOUNTING ILE SONSUZ DONGUDEN CIKARTTIK 
    }, [])
    
  
    console.log(User);
    const {cell,name,email,dob,picture}=User;
    return (
    <div>
        {/* OBJELERDE UNDEFINED'IN PROP'UNA ERISEMEME HATASI ICIN (EGER VARSA YAZDIR MANASINDA => OPTIONAL CHAINING) name?.first?.abc?.def */}
        <h1>{name?.title}{name?.first} {name?.last}</h1>
        <img classname="border border-2" src={picture?.large}   alt="" />
        <p>EMAIL: {email}</p>
        <p>CELL: {cell}</p>
        <h5>{new Date(dob?.date).toLocaleDateString()}</h5>
        <button className="btn btn-danger" onClick={getUser}> Get User </button>

    </div>
  );
}

export default User;