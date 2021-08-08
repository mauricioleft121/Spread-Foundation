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
 var Tensao = ((0.05 + ((1 + 0.4 * Lado) * (NSPT / 100))) * 1000);
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

 export function RecalqueElasticoCentro(ladoMaior,ladoMenor, Poisson,Expes) {
  var m = ladoMaior / ladoMenor;
  var n = (Expes / (ladoMenor / 2));
  var mQuad = Math.pow(m,2);
  var nQuad = Math.pow(n,2);

  var A0 = (m * Math.log(( (1 + Math.sqrt((mQuad + 1)) ) * Math.sqrt( (mQuad * nQuad) ))
  / (m * (1 + Math.sqrt( (mQuad + nQuad + 1 )))) ));

  var A1 = (Math.log( ((m + Math.sqrt(mQuad + 1)) * Math.sqrt(1 + nQuad))
  / ( m + Math.sqrt(mQuad + nQuad + 1 ) )));

  var A2 = ((m) / (n * (Math.sqrt(mQuad + nQuad + 1))));

  var F1 = ((1 / Math.PI) * (A0 + A1));

  var F2 = ((n / (Math.PI * 2) * Math.atan(A2)));

  var Is = ( F1 + (( (1 - (2 * Poisson)) / (1 - Poisson) ) * F2));

  return Is;
 }

 export function RecalqueElasticoCanto(ladoMaior,ladoMenor, Poisson,Expes) {
  var m = ladoMaior / ladoMenor;
  var n = (Expes / (ladoMenor / 2));
  var mQuad = Math.pow(m,2);
  var nQuad = Math.pow(n,2);

  var A0 = (m * Math.log(( (1 + Math.sqrt((mQuad + 1)) ) * Math.sqrt( (mQuad * nQuad) ))
  / (m * (1 + Math.sqrt( (mQuad + nQuad + 1 )))) ));

  var A1 = (Math.log( ((m + Math.sqrt(mQuad + 1)) * Math.sqrt(1 + nQuad))
  / ( m + Math.sqrt(mQuad + nQuad + 1 ) )));

  var A2 = ((m) / (n * (Math.sqrt(mQuad + nQuad + 1))));

  var F1 = ((1 / Math.PI) * (A0 + A1));

  var F2 = ((n / (Math.PI * 2) * Math.atan(A2)));

  var Is = ( F1 + (( (1 - (2 * Poisson)) / (1 - Poisson) ) * F2));

  return Is;

}

export function CalculoIf(ladoMaior,ladoMenor,Df, Poisson) {
  var LB = ladoMaior / ladoMenor;
  var DfB = Df / ladoMenor;

  if (LB >= 1 && LB < 2)  {
      if (Poisson === 0.3) { return (0.32 * (Math.pow(DfB,2))) - (0.72 * DfB) + 1.05; }
      if (Poisson === 0.4) { return (0.24 * (Math.pow(DfB,2))) - (0.62 * DfB) + 1.07; }
      if (Poisson === 0.5) { return (0.24 * (Math.pow(DfB,2))) - (0.62 * DfB) + 1.1; } }
  else if (LB >= 2 && LB < 5) {
    if (Poisson === 0.3) { return (0.24 * (Math.pow(DfB,2))) - (0.58 * DfB) + 1.05; }
    if (Poisson === 0.4) { return (0.24 * (Math.pow(DfB,2))) - (0.58 * DfB) + 1.09; }
    if (Poisson === 0.5) { return (0.16 * (Math.pow(DfB,2))) - (0.44 * DfB) + 1.07; }  }
  else if (LB >= 5) {
      if (Poisson === 0.3) { return (0.24 * (Math.pow(DfB,2))) - (0.54 * DfB) + 1.08; }
      if (Poisson === 0.4) { return (0.08 * (Math.pow(DfB,2))) - (0.3 * DfB) + 1.04; }
      if (Poisson === 0.5) { return -(0.3 * DfB) + 1.01; } }
}


export function RecalqueBraja(local,ladoMaior,ladoMenor,Df, Poisson,Expes,Ttrab,Es) {
  const If = CalculoIf(ladoMaior,ladoMenor,Df,Poisson);

  if (local === 0) {
    const Is = RecalqueElasticoCentro(ladoMaior,ladoMenor,Poisson,Expes);
    const Alfa = 4;
    const Braja = (Ttrab * (Alfa * (ladoMenor / 2))) * ( (1 - Math.pow(Poisson,2)) / Es) * (Is * If);

    return Braja;
  }
  if (local === 1) {
    const Is = RecalqueElasticoCanto(ladoMaior,ladoMenor,Poisson,Expes);
    const Alfa = 1;
    const Braja = (Ttrab * (Alfa * (ladoMenor))) * ( (1 - Math.pow(Poisson,2)) / Es) * (Is * If);

    return Braja;
  }
}
