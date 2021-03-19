module.exports = {
  siteMetadata: {
    siteName: "Portfolio",
    author: "Ebrahim Sani",
    title: "Frontend Developer",
    homeGreeting: "Hi There",
    homeIntro: "I'm Ebrahim, and I'm a React Developer",
    aboutTitle: "A Little About Me",
    about:
      "A JAM Stack web developer who specializes in JavaScript Technologies, Experience in building complete websites with Backend using CMS. I  have been freelancing and networking with other developers for enough  time to be a good designer and developer, in less than 1 year as a freelancer I have worked for +10 clients and worked on +15 projects. “Less Is More”, Writing less code leads to clean, functional software that’s easy to maintain over time, I always try to follow this concept and write as little code as possible. 'Simplicity is Key', Minimalist design lets the content stand out and shine. This is why a simple website design is the first choice I think of when it comes to designing.",
    contactHead: "Get in Touch",
    contactSub: "I'm looking for new opportunity",
    contact:
      "If you are looking for a freelancer then you are in the right place, as I’m currently freelancing full time, or if you are looking for a full-time employee, otherwise, if you just want to say hi, I will definitely say Hi back to you.",
    testimony1:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio animi voluptatum iusto enim praesentium iste, nam ullam nobis magni qui perferendis consequuntur, eum nihil aspernatur adipisci vitae, ab eligendi est.",
    person1Title: "Director at ExclusiveHitz",
    person1Name: "Wasinda Nafa",
    testimony2:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio animi voluptatum iusto enim praesentium iste, nam ullam nobis magni qui perferendis consequuntur, eum nihil aspernatur adipisci vitae, ab eligendi est.",
    person2Title: "Director at ExclusiveHitz",
    person2Name: "Wasinda Nafa",
    testimony3:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio animi voluptatum iusto enim praesentium iste, nam ullam nobis magni qui perferendis consequuntur, eum nihil aspernatur adipisci vitae, ab eligendi est.",
    person3Title: "Director at ExclusiveHitz",
    person3Name: "Wasinda Nafa",
    project1Detail:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugitobcaecati, amet eveniet expedita quia beatae dolorem aliquam quoddignissimos voluptatibus fuga odit.",
    project2Detail:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugitobcaecati, amet eveniet expedita quia beatae dolorem aliquam quoddignissimos voluptatibus fuga odit.",
    project3Detail:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugitobcaecati, amet eveniet expedita quia beatae dolorem aliquam quoddignissimos voluptatibus fuga odit.",
  },

  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-remark",
  ],
};
