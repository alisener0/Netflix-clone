import React from "react";

const Hero = () => {
  return (
    <div className="flex mx-auto">
      <div className="flex flex-col mx-auto">
        <h1 className="text-3xl font-bold my-2">KUNG FU PANDA EJDERHA ŞÖVALYE</h1>
        <p>
          İki sansarın dört güçlü silahtan oluşan bir koleksiyonu gözlerine kestirmesi sonucu Po'nun
          başı belaya girer. Adalet arayışında olan Po, bu amaçla evinden ayrılır. İngiliz şövalyesi
          olan Gezgin Kılıç ile birlikte yola koyulan Po, dünyayı yok olmaktan kurtarmak için
          silahları sansarlardan önce bulmaya çalışır.
        </p>
        <p className="mx-auto">
          <span>IMDB</span>
          <span className="text-yellow-400 ms-2 font-semibold">7.4</span>
        </p>
        <div className="flex gap-5 mx-auto my-3">
          <button className="bg-red-600 p-2 rounded hover:bg-red-700">Filmi İzle</button>
          <button className="bg-blue-600 p-2 rounded hover:bg-blue-700">Listeye Ekle</button>
        </div>
        <div>
          <img
            className="max-h-[300px] hero-img my-4 mx-auto object-contain"
            src="https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQ4BucC-jKZE5zbC_yknn6KinXY-WSOOQK6ycfgiBiQdeFqVMOSMxci6yxRslkDgE4SDcU9S5Hbl_-E-CpEqQZO3truDFKQuAC-9kP5ttllgkoeK4HpgwF_DaJCkOMGjV4-kog.jpg?r=48d"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
