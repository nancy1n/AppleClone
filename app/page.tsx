import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import Hero from "./Components/hero";

export default function  Home(){
  return(
<>  
     <Navbar/>
     <Paragraph/>

 </>
  )
}


function Paragraph(){
return(
  <>
{/* // <!-- paragraph --> */}
<div className="paragraph">
<p>Last chance to get AirPods or an eligible accessory of your choice when you buy Mac or iPad with education savings. Ends 9.30.1 <a href="">Shop</a>
</p>
</div>
<Hero/>
<Carousel/>
<Agreement/>
<Footer/>

</>
)
 }

 
 function Carousel(){
  return(
<>
{/* <!--carousel --> */}

<div id="tvCarousel" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">

    {/* <!-- Slide 1 --> */}
    <div className="carousel-item active text-center">
      <a href="slow-horses.html">
        <img src="images/Apple_TV_Slow_Horses_key_art_graphic_header_4_1_show_home.jpg.large.jpg" 
             alt="Slow Horses" 
             className="img-fluid mx-auto d-block"
             style={{maxWidth: "900px", height: "500px" , borderRadius: "10px"}}></img>
      </a>
    </div>
{/* 
    <!-- Slide 2 --> */}
    <div className ="carousel-item text-center">
      <a href="morning-show.html">
        <img src="images/1200x675sr (1).webp" 
             alt="The Morning Show" 
             className="img-fluid mx-auto d-block"
           style={{maxWidth: "900px" , height: "500px", borderRadius: "10px"}}></img>
      </a>
    </div>

    {/* <!-- Slide 3 --> */}
    <div className="carousel-item text-center">
      <a href="thestudio.html">
        <img src="images/1200x675sr.webp" 
             alt="the-studio" 
             className="img-fluid mx-auto d-block"
           style={{maxWidth: "900px" , height:"500px" , borderRadius: "10px"}}></img>
      </a>
    </div>

  </div>

  {/* <!-- Controls --> */}
  <button className="carousel-control-prev" type="button" data-bs-target="#tvCarousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#tvCarousel" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>
</>
  )
 }
 function Agreement(){
  return(
    <>
    <div className="agreement">
  <p>1. Available for Qualified Purchasers only. Qualified Purchasers purchasing an eligible Mac/iPad (“Eligible Product”) with eligible AirPods/accessory (“Promotion Product”) from a Qualifying Location through September 30, 2025 will receive Promotion Savings (up to $199, not to exceed the price of the Promotion Product). Customers will be charged for all items in their cart, including the Promotion Product. Only one Promotion Product per Eligible Product per Qualified Purchaser. Offer subject to availability. While supplies last. Additional restrictions apply. View full offer terms</p>
<p>2. AT&T iPhone 17 and iPhone Air Special Deal: Monthly price (if shown) reflects net monthly payment, after application of AT&T trade-in credit applied over 36 months with purchase of an iPhone 17 Pro, iPhone 17 Pro Max, iPhone 17, or iPhone Air and trade-in of eligible smartphone. Receive credit with purchase of an iPhone 17 Pro or iPhone 17 Pro Max of either $1100 or $350 (based upon the model of your trade-in smartphone). Receive credit with purchase of an iPhone Air of either $830 or $350 (based upon the model of your trade-in smartphone). Receive credit with purchase of an iPhone 17 of either $800 or $350 (based upon the model of your trade-in smartphone). Max bill credits will not exceed the cost of the device. Requires upgrade of an existing line or activation of a new line and purchase of a new iPhone 17 Pro, iPhone 17 Pro Max, iPhone 17, or iPhone Air, on qualifying 36 month 0% APR installment plan, subject to carrier credit qualification. Customers purchasing this offer through Apple cannot add the Next Up Anytime option. $0 down for well qualified customers only, or down payment may be required and depends on a variety of factors. Tax on full retail price due at sale. Requires activation on eligible AT&T unlimited plan. AT&T may temporarily slow data speeds if the network is busy. If you cancel eligible wireless service, credits will stop and you will owe the remaining device balance. Activation/Upgrade Fee: $35. Trade in device may not be on existing installment plan. Bill credits are applied as a monthly credit over the 36 month installment plan. Credits start within 3 bills. Will receive catchup credits once credits start. Wireless line must be on an installment agreement, active, and in good standing for 30 days to qualify. Installment agreement starts when device is shipped. To get all credits, device must remain on agreement for entire term and you must keep eligible service on device for entire installment term. Limited time offer; subject to change. Limits: one trade-in per qualifying purchase and one credit per line. May not be combinable with other offers, discounts, or credits. Purchase, financing, other limits, and restrictions apply. Price for iPhone 17 includes $30 AT&T connectivity discount. Activation required.</p>
<p>Boost Mobile iPhone 17 and iPhone Air Special Deal: Buy an iPhone 17 Pro, iPhone 17 Pro Max, iPhone Air, or iPhone 17 and get $830 in bill credits (not to exceed the cost of the iPhone) applied over 36 months. No trade-in required. If you are trading in a device with this deal, trade-in value will be applied as additional bill credits over 36 months. Monthly price (if shown) reflects net monthly payment, after application of $830 in bill credit (not to exceed the cost of the iPhone purchased) and trade-in credit (if applicable) applied over 36 months respectively. Requires activation of a new line, Boost Mobile Infinite Access plan and purchase on qualifying 36-month 0% APR installment plan, subject to carrier credit qualification. After making 12 installment payments, you may upgrade to a new iPhone and get up to $830 in bill credits (not to exceed the cost of the iPhone) applied over 36 months for the new iPhone on the Infinite Access plan and purchase on new qualifying 36-month 0% APR installment plan, subject to carrier credit qualification. Tax on full retail price due at sale. If you cancel eligible wireless service, credits will stop and you will owe the remaining device balance. Bill credits are applied as a monthly credit over the 36-month installment plan. Trade-in credits start within 3 bills. Installment agreement starts when device is shipped. To get all credits, device must remain on agreement for entire term and you must keep eligible service on device for entire installment term. Limited-time offer; subject to change. Limits: one credit per line. May not be combined with other offers, discounts, or credits. Purchase, financing, other limits, and restrictions apply. Price for iPhone 17 includes $30 Boost Mobile connectivity discount. Activation required.</p>
<p>T-Mobile iPhone 17 and iPhone Air Special Deal: Monthly price (if shown) reflects net monthly payment, after application of T-Mobile trade-in credit applied over 24 months with purchase of an iPhone 17 Pro, iPhone 17 Pro Max, iPhone 17, or iPhone Air and trade-in of eligible smartphone. Any Condition trade-in offer requires Experience Beyond or Go5G Next plan.</p>
<p>Existing customers: Receive credit with purchase of an iPhone 17 Pro, iPhone 17 Pro Max, iPhone 17, or iPhone Air (based upon the model and condition of your trade-in smartphone) of $1100, $800 or $550 for customers on an Experience Beyond or Go5G Next plan (excluding all 55, Military, First Responder plans) ($100+/mo. plan after AutoPay discount if applicable; plus taxes & fees); $900, $600 or $300 for customers on an Experience Beyond or Go5G Next 55, Military, or First Responder plan ($85+/mo. plan after AutoPay discount if applicable; plus taxes & fees); $800 or $400 for customers on an Experience More or Go5G Plus plan (excluding all 55, Military, First Responder plans) ($85+/mo. plan after AutoPay discount if applicable; plus taxes & fees); $600 or $300 for customers on an Experience More or Go5G Plus 55, Military, or First Responder plan ($70+/mo. plan after AutoPay discount if applicable; plus taxes & fees); or $300 or $150 for customers on a Go5G, Magenta, Magenta MAX, or Essentials plan ($60+/mo. plan after AutoPay discount if applicable; plus taxes & fees). Must be an existing T-Mobile customer.</p>
<p>Add-a-Line customers: Receive credit with purchase of an iPhone 17 Pro, iPhone 17 Pro Max, iPhone 17, or iPhone Air (based upon the model and condition of your trade-in smartphone) of $1100, $800 or $550 for customers on an Experience Beyond or Go5G Next plan (excluding all 55, Military, First Responder plans) ($100+/mo. plan after AutoPay discount if applicable; plus taxes & fees); $900, $600 or $300 for customers on an Experience Beyond or Go5G Next 55, Military, or First Responder plan ($85+/mo. plan after AutoPay discount if applicable; plus taxes & fees); $800 or $400 for customers on an Experience More or Go5G Plus plan (excluding all 55, Military, First Responder plans) ($85+/mo. plan after AutoPay discount if applicable; plus taxes & fees); $600 or $300 for customers on an Experience More or Go5G Plus 55, Military, or First Responder plan ($70+/mo. plan after AutoPay discount if applicable; plus taxes & fees); $800 or $400 for customers on a Go5G, Magenta, Magenta MAX, or Essentials plan (excluding all 55, Military, First Responder plans) ($60+/mo. plan after AutoPay discount if applicable; plus taxes & fees); or $600 or $300 for customers on a Go5G, Magenta, Magenta MAX, or Essentials 55, Military, or First Responder plan ($45+/mo. plan after AutoPay discount if applicable; plus taxes & fees). Must be a T-Mobile customer adding a new line to an existing T-Mobile account.</p>
<p>New customers: Receive credit with purchase of an iPhone 17 Pro, iPhone 17 Pro Max, iPhone 17, or iPhone Air (based upon the model and condition of your trade-in smartphone) of $1100, $800 or $550 for customers on an Experience Beyond plan (excluding all 55, Military, First Responder plans) ($100+/mo. plan after AutoPay discount if applicable; plus taxes & fees); $900, $600 or $300 for customers on an Experience Beyond 55, Military, or First Responder plan ($85+/mo. plan after AutoPay discount if applicable; plus taxes & fees); $800 or $400 for customers on an Experience More plan (excluding all 55, Military, First Responder plans) ($85+/mo. plan after AutoPay discount if applicable; plus taxes & fees); $600 or $300 for customers on an Experience More 55, Military, or First Responder plan ($70+/mo. plan after AutoPay discount if applicable; plus taxes & fees); $800 or $400 for customers on an Essentials plan (excluding all 55, Military, First Responder plans) ($60+/mo. plan after AutoPay discount if applicable; plus taxes & fees); or $600 or $300 for customers on a Essentials 55, Military, or First Responder plan ($45+/mo. plan after AutoPay discount if applicable; plus taxes & fees). Must be a new T-Mobile customer.</p>
<p>Max bill credits will not exceed the cost of the device. Credit comprised of (i) Apple instant trade-in credit at checkout and (ii) T-Mobile monthly bill credits applied over 24 months. Allow 2 bill cycles from valid submission and validation of trade-in. Tax on pre-credit price due at sale. Limited-time; subject to change. Qualifying credit, data plan, and trade-in (e.g., iPhone 16 Pro Max) in good condition required. Max 4 promotions on any iPhone per account. May not be combinable with some offers, discounts, or promotions. Activation required. Contact T-Mobile before cancelling entire account to continue remaining bill credits, or credits stop & balance on required finance agreement is due. Bill credits end if you pay off early.</p>
<p>Verizon iPhone 17 and iPhone Air Special Deal: Monthly price (if shown) reflects net monthly payment, after application of Verizon trade-in credit applied over 36 months with purchase of an iPhone 17 Pro, iPhone 17 Pro Max, iPhone 17, or iPhone Air.</p>
<p>Existing customers: Customers on an Unlimited Ultimate plan (min. $90/mo w/Auto Pay (+taxes/fees) for 36 mos) receive: $1100, $830, or $300 credit (based upon the model of your trade-in smartphone) with purchase of an iPhone 17 Pro or iPhone 17 Pro Max; $1000, $830, or $300 credit (based upon the model of your trade-in smartphone) with purchase of an iPhone Air; or $830 or $300 credit (based upon the model of your trade-in smartphone) with purchase of an iPhone 17. Customers on an Unlimited Plus plan (min. $80/mo w/Auto Pay (+taxes/fees) for 36 mos) receive $830, $600 or $300 credit (based upon the model of your trade-in smartphone) with purchase of an iPhone 17 Pro, iPhone 17 Pro Max, iPhone Air, or iPhone 17. Customers on an Unlimited Welcome plan (min. $65/mo w/Auto Pay (+taxes/fees) for 36 mos) receive $600 or $300 credit (based upon the model of your trade-in smartphone) with purchase of an iPhone 17 Pro, iPhone 17 Pro Max, iPhone Air, or iPhone 17. Must be an existing Verizon mobile customer.</p>
<p>New or Add-a-Line customers: Customers on an Unlimited Ultimate plan (min. $90/mo w/Auto Pay (+taxes/fees) for 36 mos) receive: $1100, $830, or $300 credit (based upon the model of your trade-in smartphone) with purchase of an iPhone 17 Pro or iPhone 17 Pro Max; $1000, $830, or $300 credit (based upon the model of your trade-in smartphone) with purchase of an iPhone Air; or $830 or $300 credit (based upon the model of your trade-in smartphone) with purchase of an iPhone 17. Customers on an Unlimited Plus plan (min. $80/mo w/Auto Pay (+taxes/fees) for 36 mos) receive $830, $600 or $300 credit (based upon the model of your trade-in smartphone) with purchase of an iPhone 17 Pro, iPhone 17 Pro Max, iPhone Air, or iPhone 17. Customers on an Unlimited Welcome plan (min. $65/mo w/Auto Pay (+taxes/fees) for 36 mos) receive $600 or $300 credit (based upon the model of your trade-in smartphone) with purchase of an iPhone 17 Pro, iPhone 17 Pro Max, iPhone Air, or iPhone 17. Must be a new Verizon mobile customer or adding a new line to an existing Verizon mobile account.</p>
<p>Max bill credits will not exceed the cost of the device. Credit comprised of (i) Apple instant trade-in credit at checkout and (ii) Verizon monthly bill credits applied over 36 months. Customer must remain in the Verizon Device Payment Program for 36 months to receive the full benefit of the Verizon bill credits. Bill credits may take 1-2 bill cycles to appear. If it takes two cycles for bill credits to appear, you'll see the credit for the first cycle on your second bill in addition to that month's credit. Requires purchase and activation of a new iPhone 17 Pro, iPhone 17 Pro Max, iPhone 17, or iPhone Air with the Verizon Device Payment Program at 0% APR for 36 months, subject to Verizon credit qualification, and iPhone availability and limits. Taxes and shipping not included in monthly price. Sales tax may be assessed on full value of new iPhone. Requires eligible unlimited Verizon mobile plan. Requires trade-in of eligible device. Must be at least 18 to trade-in. Apple or its trade-in partners reserve the right to refuse or limit any trade-in transaction for any reason. In-store trade-in requires presentation of a valid, government-issued photo ID (local law may require saving this information). In-store promotion availability subject to local law; speak to a Specialist to learn more. Limited-time offer; subject to change. Additional terms from Apple, Verizon, and Apple's trade-in partners may apply. Price for iPhone 17 includes $30 Verizon connectivity discount.</p> 
<p>AT&T iPhone 16 Special Deal: Buy an iPhone 16 128 GB and get $153.36 in bill credits applied over 36 months. Requires upgrade of an existing line (or activation of a new line) and purchase on qualifying 36-month 0% APR installment plan, subject to carrier credit qualification. $0 down for well-qualified customers only, or down payment may be required and depends on a variety of factors. Tax on full retail price due at sale. Requires activation on eligible AT&T unlimited plan. AT&T may temporarily slow data speeds if the network is busy. If you cancel eligible wireless service, credits will stop and you will owe the remaining device balance. Activation/Upgrade Fee: $35. Bill credits are applied as a monthly credit over the 36-month installment plan. Credits start within 3 bills. Will receive catch-up credits once credits start. Wireless line must be on an installment agreement, active, and in good standing for 30 days to qualify. Installment agreement starts when device is shipped. To get all credits, device must remain on agreement for entire term and you must keep eligible service on device for entire installment term. Limited-time offer; subject to change. Limits: one credit per line. May not be combinable with other offers, discounts, or credits. Purchase, financing, other limits, and restrictions apply. Activation required.</p>
</div>
  <hr></hr>  
    </>
  )
 }
 