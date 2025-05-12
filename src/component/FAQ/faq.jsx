import Footer from "../../layout/footer";
import Header from "../../layout/header";
import { Image_Url } from "../../url/url";
import "./faq.css";
function Faq() {
  return (
    <>
      <Header />
      <section>
        <div className="container">
          <img src={`${Image_Url}faq2.jpg`}></img>
        </div>
        <p className="p">FAQ</p>
        <h1 className="h1">Frequently Asked Questions</h1>

        <div className="container3">
          <div className="Ques">
            <details>
              <summary>Am I Ready to Be a Homeowner?</summary>
              <p>
                Owning a home is a big responsibility. You need to be
                financially stable and ready to take on the responsibilities of
                homeownership. Here are some questions to ask yourself:
              </p>
            </details>
          </div>
          <div className="Ques">
            <details>
              <summary>Is Renting or Buying Better?</summary>
              <p>
                Renting is often more affordable in the short term, but buying a
                home can be a better long-term investment. Consider your
                financial situation and future plans before making a decision.
              </p>
            </details>
          </div>
          <div className="Ques">
            <details>
              <summary>What Is the Lender’s Formula?</summary>
              <p>
                Lenders typically use a formula that considers your income,
                debts, and credit score to determine how much you can borrow. A
                common rule of thumb is that your monthly mortgage payment
                should not exceed 28% of your gross monthly income.
              </p>
            </details>
          </div>
          <div className="Ques">
            <details>
              <summary>What Do I Look for in Homes?</summary>
              <p>
                When looking for a home, consider factors such as location,
                size, condition, and amenities. Make a list of your must-haves
                and nice-to-haves to help narrow down your options.
              </p>
            </details>
          </div>
          <div className="Ques">
            <details>
              <summary>Do I Need a Home Warranty?</summary>
              <p>
                A home warranty can provide peace of mind by covering the cost
                of repairs or replacements for major systems and appliances.
                However, it’s not always necessary, especially if you’re buying
                a new home with warranties on the systems and appliances.
              </p>
            </details>
          </div>
          <div className="Ques">
            <details>
              <summary>What Should I Expect at Closing?</summary>
              <p>
                Closing is the final step in the home buying process. You’ll
                sign a lot of paperwork, pay closing costs, and receive the keys
                to your new home. It’s important to review all documents
                carefully and ask questions if you don’t understand something.
              </p>
            </details>
          </div>
          <div className="Ques">
            <details>
              <summary>What Is Pre-approval?</summary>
              <p>
                Pre-approval is a process where a lender evaluates your
                financial situation and determines how much they are willing to
                lend you. It’s a good idea to get pre-approved before you start
                house hunting, as it can give you a better idea of your budget
                and make you a more attractive buyer to sellers.
              </p>
            </details>
          </div>
          <div className="Ques">
            <details>
              <summary>Am I Ready to Rent?</summary>
              <p>
                Renting can be a great option if you’re not ready to buy a home.
                Consider your financial situation, lifestyle, and future plans
                before making a decision. Make sure you understand the terms of
                the lease and what is expected of you as a tenant.
              </p>
            </details>
          </div>
          <div className="Ques">
            <details>
              <summary>What Should I Offer?</summary>
              <p>
                When making an offer on a home, consider the current market
                conditions, the condition of the home, and your budget. It’s a
                good idea to work with a real estate agent who can help you
                determine a fair offer price.
              </p>
            </details>
          </div>
          <div className="Ques">
            <details>
              <summary>Can I Ask You for Advice?</summary>
              <p>
                Yes! We’re here to help you navigate the home buying process.
                Don’t hesitate to reach out with any questions or concerns you
                may have. Our team of experts is ready to assist you every step
                of the way.
              </p>
            </details>
          </div>
        </div>

        <div className="contactus">
          <span> 📞 +1 910-626-85255</span>
          <h1>Let’s Find You Together The Place You Deserve</h1>
          <p>
            We are here to help you with all your real estate needs. Whether
            you’re buying, selling, or renting.
            <br />
            Our team of experts is ready to assist you every step of the way.
          </p>
          <button>Contact Us</button>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Faq;
