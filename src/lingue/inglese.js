let engb_text = {
  navbar: {
    home: "/ home",
    about_us: "/ about us",
    services: "/ services",
    portfolio: "/ projects",
    contacts: "/ contacts",
  },
  jumbo: {
    title1: "A COMPANY FOR ALL YOUR NEEDS",
    title2: "TO REALIZE YOUR DREAMS",
    subtitle: "Founded by a group of individuals with various skills, we provide expertise in multiple areas in order to help you achieve the result you imagine for your website or business.",
  },
  about: {
    title: "ABOUT US",
    subtitle: "Gecko Developers was born with the goal of giving you the best opportunity to help you create your website that stands out, for you or for your business, through our experienced developers and content strategists.",
  },
  services: {
    title: "SERVICES",
    paragrafo1: "",
    paragrafo2: "",
    
  }
};

export function getEngb_text() {
  return engb_text;
}

// export function getInvoice(number) {
//   return invoices.find(
//     (invoice) => invoice.number === number
//   );
// }



/*

    "services" => [
        "title" => "SERVICES",
        "subtitle" =>  "Gecko Developers is able to offer a wide variety of services to help you realize your dream website. From the initial design, to creating content, to your digital presence, Gecko Developers can work with you from the beginning, and continue to work with you along the way to make sure everything is being run smoothly, and the way you desired.",
        "subtitle2" => "You are free to choose any or multiple services from our offerings that better suit your needs.",

        "full" => "FULL PACKAGE",
        "content1" => "From the design to the logo and your brand and website, to content creation and strategical communications, making sure every asset is created to your needs, together with our expertise.",

        "individuals" => "WEBSITE FOR INDIVIDUALS",
        "content2" => "Creating a website for you or your brand the way you want, to help you gain a foothold on internet visibility.",

        "companies" => "WEBSITE FOR COMPANIES",
        "content3" => "Creating the website for your business or company that fits to the best of your or your industry’s needs, together with our developers.",

        "design" => "CREATIVE DESIGN",
        "content4" => "Designing your logo, brand image, website, as well as graphics and sound branding the way you wish, together with our Design & Creative Team.",

        "support" => "CONTINUOUS SUPPORT",
        "content5" => "Making sure the website is updated, run smoothly, and maintained on a regular basis, as well as creating your, your brand’s or your business’ presence online through social media channels and content, maintained and managed regularly.",

        "content_creation" => "CONTENT CREATION",
        "content6" => "Creating the necessary strategic content for you, your brand or your business in your industry together with our experts.",

        "marketing" => "MARKETING ACTIVITIES AND CONSULTANCY",
        "content7" => "Constructing necessary marketing activities, campaigns, both online and offline, to better promote your brand or your business to your audience and customers, help you generate leads and revenue, with the help of our expert marketers and strategists.",
    ],
    "projects" => [
        "title" => "PROJECTS",
    ],
    "contact" => [
        "title" => "NEED MORE INFORMATION AND ESTIMATE?",
    ],

// contenuti delle schede singole dei servizi
    "full" => [
        "title" => "FULL PACKAGE",
        "content1" => "When forming a new business or developing your own brand, there are many various aspects and activities to consider. Forming efficient consistency across all channels and all activities is fundamental to boost up your brand, build meaningful relationships with your stakeholders, partners, customers, and your audience.",
        "content2" => "Properly planning and strategizing any activity and asset you create from the start will also help you maintain a stable positive outcome throughout your journey, while also helping you make faster decisions and adapt to difficult situations easier.",
        "content3" => "Our services for Full Package include:",
        "content4" => "", // è una UL e non so come inserirla
        "content5" => "For more information, get in touch with us!", // serve il link su get in touch
    ],
    "individuals" => [
        "title" => "WEBSITE FOR INDIVIDUALS",
        "content1" => "Having a website online is becoming one of the most efficient ways to showcase who you are, what you are capable of, as well as can act like your online portfolio. Whether you are a photographer, artist, architect, designer, musician, or a blogger, having your content and your work reached to as many people, in the most clear and well-designed way is crucial for you to increase your personal brand’s image.",
        "content2" => "Showcasing your work and content through a website can also help you increase credibility, while appearing more professional to your audience, fans, followers, even future employers.",
        "content3" => "Through our expert developers, we offer website creation for different levels of interactivity that suits your needs and values.",
        "content4" => "",
        "content5" => "For more information, get in touch with us!", // serve il link su get in touch
    ],
    "companies" => [
        "title" => "WEBSITE FOR COMPANIES",
        "content1" => "If you’re developing a start-up, reaching for your dreams or opening a store, it is crucial to have a website that clearly showcases your identity and connects with your target audience and customers in an in-depth, as well as professional and clear way. Having your own website will help you increase credibility, exchange information, grant 24/7 accessibility, market expansion, advertising, while cutting down your costs.",
        "content2" => "Your website needs to be user friendly and easy to navigate, while giving precise and detailed information about your business and industry as well as promote your brand.",
        "content3" => "Through our expert developers, we offer website creation for different levels of interactivity that suits your company’s needs and values.",
        "content4" => "",
        "content5" => "For more information, get in touch with us!", // serve il link su get in touch
    ],
    "design" => [
        "title" => "CREATIVE DESIGN",
        "content1" => "As simple as it may sound, having professionally done visual assets, from your logo to a video or imagery, not only provides consistency and visual appeal, but can also boost up the credibility of your brand, establish meaningful relationships with your customers and target audience, as well as deliver your message across more efficiently.",
        "content2" => "Our services for Creative Design include:",
        "content3" => "", // è una UL e non so come inserirla
        "content4" => "",
        "content5" => "For more information, get in touch with us!", // serve il link su get in touch
    ],
    "support" => [
        "title" => "CONTINUOUS SUPPORT",
        "content1" => "Handling a website is no easy task. A website needs to be maintained, updated and monitored regularly in order to make sure it is running smoothly, the website pages and the message is being delivered accurately and the assets included in the pages are used and functions properly. Running SEO campaigns, inserting useful and clear keywords will also increase the visits to your website, hence put you higher up in the list of search engine research results. But having a website might not always be enough to establish a digital presence.",
        "content2" => "An active digital presence might also include active social media accounts that are maintained and used regularly. Many businesses and individual works are already being carried over to, promoted and celebrated on social media, with millions being added each day. For many types of industries, a social media presence is not anymore, a good-to-have but a must.",
        "content3" => "Our services for Continuous Support include:",
        "content4" => "", // è una UL e non so come inserirla
        "content5" => "For more information, get in touch with us!", // serve il link su get in touch
    ],
    "content_creation" => [
        "title" => "CONTENT CREATION",
        "content1" => "Your content is the most crucial asset you have. It identifies your brand, who you are, what you offer or deliver, helps you connect with your audience, fans, customers, future employers, as well as promote you and/or your brand and company.",
        "content2" => "From what is written and seen on your website to the activities you do online, your message is always delivered through your content. By creating consistent, clear, informative content, you’re creating a library or information and resources about you, your brand or your business. Effective content and content creation strategies will help you foster better relationships with your audience and customers, as well as increase your recognition and reputation.",
        "content3" => "Our services for Content Creation include:",
        "content4" => "", // è una UL e non so come inserirla
        "content5" => "For more information, get in touch with us!", // serve il link su get in touch
    ],
    "marketing" => [
        "title" => "MARKETING ACTIVITIES AND CONSULTANCY",
        "content1" => "Establishing accurate and correct marketing strategies is fundamental to generate lead, generate revenue, help grow your brand or business, in any form of industry or market. Marketing is what helps you connect with who you want to reach and, eventually, convert the reach into business.",
        "content2" => "Together with marketing strategies, a brand identity and a brand image are also crucial aspects in any form of business or a company. A unique and, most importantly, well-thought and well-established brand identity can help you foster better relationships with your customers or your target audience, as it can better show that you share similar values, as well as help provide consistency to your brand, while serving as a form of guidelines for your future activities.",
        "content3" => "Our services for Marketing Activities and Consultancy include:",
        "content4" => "", // è una UL e non so come inserirla
        "content5" => "For more information, get in touch with us!", // serve il link su get in touch
    ],
];

*/