import React from "react";
// import './Contact.css'

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full flex flex-col justify-center items-center "
    >
      <div className="max-w-[1300px] grid grid-cols-1 gap-6 my-6 sm:grid-cols-2">
        {/* Title */}
        <div className="reletive w-full h-96">
          <iframe
            title="Google Map"
            class="top-0 left-0 w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d461.29731241604736!2d91.82813699218835!3d22.339332840743985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd946490151f5%3A0xa0b7b6e2c0bf010f!2sKamal%20Chamber!5e0!3m2!1sen!2sbd!4v1706153291076!5m2!1sen!2sbd"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* Address info */}
        <div className="py-9  text-sm">
          <p className="text-lg gap-2">Address:</p>
          <p>Kamal Chamber (2nd Floor), 61 Jubilee Road, Chittagong-4000</p>
          <p>
            Shopno Chaya (Ground Floor), House # 03, Road # 01, Block # B,
            Banasree, Rampura, Dhaka
          </p>
          <p className="text-lg pt-2">Email:</p>
          <a className="" href="mailto: olympicassociates570@gmail.com">
            olympicassociates570@gmail.com
          </a>
          <p className="text-lg pt-2">Telephone:</p>
          <p>031 618375, 2865220, 2853063</p>
          <p className="text-lg pt-2">Mobile:</p>
          <p>+88 01711 748267</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
