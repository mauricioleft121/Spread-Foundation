/* eslint-disable prettier/prettier */
/* eslint-disable no-lone-blocks */


export function TensãoTeixeira1(NSPT) {
  if (NSPT < 5) {
    NSPT = 5;
  }
  var Tensao = 20 * NSPT;

  return Tensao;
 }

 export function TensãoTeixeira2(NSPT,Lado) {
 {Lado === null ? Lado = 1 : null;}
 if (NSPT < 5) {
   NSPT = 5;
 }
 var Tensao = (0.05 + ((1 + 0.4 * Lado) * (NSPT / 100))) * 1000;
 return Tensao;
 }

 export function TensãoMelo(NSPT) {
   if (NSPT > 16) {
     NSPT = 16;
   }
   var Tensao = (0.1 * (Math.sqrt(NSPT) - 1) * 1000).toFixed(2);

   return Tensao;
 }

 export function MediaTensões(T1,T2,T3,B1,B2,B3){
   var Media = 0,Num = 0;
   {B1 ? (Media = Media + T1,Num++) : null;}
   {B2 ? (Media = Media + T2,Num++) : null;}
   {B3 ? (Media = Media + T3,Num++) : null;}
   Media = (Media / Num);
   Media = Media.toFixed(2);
   return Media;
 }
