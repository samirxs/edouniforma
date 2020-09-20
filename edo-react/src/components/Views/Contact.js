import React from 'react';

function Contact() {

  return (
    <div className="c_bg_img" >
    <section className="text-gray-700 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-no-wrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <div className="bg-white relative flex flex-wrap py-6">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm">Ünvan</h2>
              <p className="leading-relaxed">Sədərək Ticarət Mərkəzi, Təsərrüfat b, sıra 1, m 12</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm">Email</h2>
              <div className="text-indigo-500 leading-relaxed">edouniforma@gmail.com</div>
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mt-4">WhatsApp</h2>
              <p className="leading-relaxed">051 000 00 00</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 p-10 rounded-lg bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Bizimlə Əlaqə // Sifariş</h2>
          <p className="leading-relaxed mb-5 text-gray-600">Sifarişlər barədə ümumi məlumat, əlaqə, təkliflər</p>
          <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Ad" type="text" />
          <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Email" type="email" />
          <textarea className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none" placeholder="Mesaj"></textarea>
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Göndər</button>
          <p className="text-xs text-gray-500 mt-3">Xüsusi iş geyimləri, Qoruyucu vasitələr, Personal geyimlər, Logoların vurulması</p>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Contact;

