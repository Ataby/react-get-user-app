//?===============================================
//?                USEEFFECT HOOK
//?===============================================
//! UseEffect Hook'u fonksiyonel componenler'te yan etkileri
//! (side effect) gerceklestirmek icin kullanilir.
//! componentDidMount,componentDidUpdate,ve componentWillUnmount
//! metotlarinin bir birlesimi gibi dusunulebilir.
//HOOK ICIN GECERLI KURALLARIN HEPSI USE.EFFECT ICIN DE GECERLIDIR.
//PERFORMANCE BASED CODE ICIN STATE'LERI GEREKLI YERLERDE KULLANMAK GEREKIR.

import { useState, useEffect } from "react";

// useEffect(() => {
//   ComponentDidMount code
// }, []); DEPENDENCY ARRAY BOS OLURSA SADECE DID.MOUNT GIBI CALISIR.

//! useEffect(() => {
//*   */ ComponentDidMount + componentDidUpdate code */
//! }, [var1, var2]);

//! useEffect(() => {
//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, []);

//! useEffect(() => {
//*   //* componentDidMount code + componentDidUpdate code */

//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, [var1, var2]); //? Dependency Array

const UseEffectHook = () => {
  // BU SATIRDAN EN ALTA KADAR RENDERING KISMI OLARAK SAYILIR.

  //FUNCTION COMPONENTLERDE DOGRUDAN RENDER METODU GOZUKMEZ.
  const [count, setcount] = useState(0);
  const fetchData = function () {
    console.log("data fetched");
  };

  // useEffect(() => {
  //   console.log("mounting + updating")
  //   // TANIMLAMA ALANI => COMP.DID.MOUNT(render+mounting) + UPDATE(render+update)
  //   // SADECE MOUNTING'DE DEPENDENCY ARRAY BOS OLUR
  //   // FETCH, ASYNC-AWAIT, LOCAL.STORAGE, SET.TIMEOUT, SET.INTERVAL BURADA KULLANILABILIR.
  //   setTimeout(()=>{
  //       alert("data fetched");
  //   },1000);
  //   // EGER DEPENDENCY ARRAY VARSA BU KISIM MOUNT+UPDATE SEKLINDE TEKRARLAR.
  //   // EGER DEPENDENCY ARRAY YOKSA SADECE MOUNTING SEKLINDE CALISIR.

  //       return () => {
  //           // RETURN'UN ICI => CLEAN-UP FONKSIYONU YANI COMP.WILL.UNMOUNT
  //           //UNMOUNT YAPILMAYACAKSA RETURN KISMINA GEREK YOK
  //       }
  //   }, [count]); //BU DEGISKEN DEGISINCE TEKRARDAN BU BLOGU CALISTIR (UPDATING). BURADA DEGISKEN BOŞSA SADECE MOUNTING YAPAR, BLOGU CALISTIRMAZ.

    useEffect(() => {
      // const timerID = setInterval(fetchData, 1000);
      const timerID = fetchData;
      console.log("mounting+updating");

      return () => {
         // RETURN'UN ICI => CLEAN-UP FONKSIYONU YANI COMP.WILL.UNMOUNT
         //UNMOUNT YAPILMAYACAKSA RETURN KISMINA GEREK YOK
            clearInterval(timerID);
            console.log("unmounting");

        }
    }, [count]); //KOSELI PARANTEZIN ICI => DEPENDENCY ARRAY, UPDATE()'IN HANGI DEGISKENE GORE CALISACAGINI BELLI EDER.

  console.log("rendering");

  return (
    <div className="container text-center">
      <h1 className="text-danger">USE EFFECT HOOK</h1>
      <h3>COUNT={count}</h3>
      <button className="btn btn-info" onClick={() => setcount(count + 1)}>
        artıra
      </button>
    </div>
  );
};
export default UseEffectHook;
