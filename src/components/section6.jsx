import React from "react";

function FAQSection() {
  return (
    <section className="faqsection">
      <h1 className="faqtitle">FAQ</h1>
      <p className="faqdescription">
        The largest and oldest Quotations Page on the Web with about 30 categories
      </p>
      <p style={{paddingLeft:"40px" , color:"#E8E8E8"}}>Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque augue elit, rutrum sit amet commodo vel, porta quis purus. Nullam faucibus, odio eu bibendum auctor, eros dolor aliquet purus, sit amet pellentesque neque est id tortor. In egestas, erat a dapibus dapibus, mi augue ornare lorem, nec pretium ligula purus nec tellus. Aenean a scelerisque nisi. Nullam pretium fermentum nunc, feugiat placerat urna rutrum eget. Nullam mattis justo consequat risus. Donec imperdiet enim id efficitur pharetra. Nam sollicitudin at est eget auctor. Ut sed ante quis nulla tincidunt auctor. Quisque accumsan pretium tincidunt. Etiam viverra ultrices est vitae suscipit. Pellentesque elementum purus non nisl pharetra consequat. Nunc in venenatis orci.</p>

      <div className="faqcontainer">
        <div className="faqitem">
          <div className="faqquestion">
            <span>A huge collection of inspirational quotes, thoughts of greatest minds in history</span>
            <span className="faqtoggle">▷</span>
          </div>
        </div>

        <div className="faqitem">
          <div className="faqquestion">
            <span>Quotations from the great works of literature</span>
            <span className="faqtoggle">▷</span>
          </div>
        </div>

        <div className="faqitem">
          <div className="faqquestion">
            <span>Read quotes and sayings from famous people in history</span>
            <span className="faqtoggle">▷</span>
          </div>
        </div>

        <div className="faqitem">
          <div className="faqquestion">
            <span>Collected quotes from Albert Einstein</span>
            <span className="faqtoggle">▷</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
