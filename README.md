<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CEN Property Management LLC</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f5f5f5;
    }

    header {
      background-color: #002855;
      color: white;
      text-align: center;
      padding: 20px 10px;
    }

    header img {
      width: 150px;
      border-radius: 8px;
    }

    header h1 {
      margin: 10px 0;
      font-size: 2em;
    }

    nav {
      background-color: #004080;
      color: white;
      display: flex;
      justify-content: center;
      padding: 10px;
    }

    nav a {
      margin: 0 15px;
      color: white;
      text-decoration: none;
      font-weight: bold;
    }

    nav a:hover {
      text-decoration: underline;
    }

    main {
      padding: 20px;
    }

    section {
      margin: 20px 0;
    }

    .about, .mission, .services, .contact {
      background-color: white;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    .images {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      justify-content: center;
    }

    .images img {
      width: 30%;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }

    footer {
      text-align: center;
      background-color: #002855;
      color: white;
      padding: 10px;
    }
  </style>
</head>
<body>
  <header>
    <img src="logo.png" alt="CEN Property Management Logo">
    <h1>CEN Property Management LLC</h1>
  </header>
  
  <nav>
    <a href="#about">About Us</a>
    <a href="#mission">Mission</a>
    <a href="#services">Services</a>
    <a href="#contact">Contact</a>
  </nav>

  <main>
    <section id="about" class="about">
      <h2>About Us</h2>
      <p>At CEN Property Management, we bring a wealth of experience and dedication to property management, offering tailored solutions to meet the unique needs of property owners and residents. With us, you’ll find a trusted partner committed to professionalism, transparency, and customer satisfaction. We take pride in managing properties efficiently, upholding the highest standards to enhance property value, and creating thriving communities.</p>
    </section>

    <section id="mission" class="mission">
      <h2>Our Mission</h2>
      <p>"At CEN Property Management, we are dedicated to providing exceptional property management services with a commitment to professionalism, transparency, and customer satisfaction. Our mission is to create thriving communities by managing properties efficiently, maintaining high-quality standards, and fostering positive relationships with residents and property owners alike."</p>
    </section>

    <section id="services" class="services">
      <h2>Our Services</h2>
      <ul>
        <li>Comprehensive property maintenance</li>
        <li>Tenant screening and management</li>
        <li>Financial oversight and reporting</li>
        <li>Community development and support</li>
        <li>Customized property management plans</li>
      </ul>
    </section>

    <section class="images">
      <h2>Our Properties</h2>
      <img src="property1.jpg" alt="Property 1">
      <img src="property2.jpg" alt="Property 2">
      <img src="property3.jpg" alt="Property 3">
    </section>

    <section id="contact" class="contact">
      <h2>Contact Us</h2>
      <p>Email: <a href="mailto:contact@cen-propertiesus.com">contact@cen-propertiesus.com</a></p>
      <p>Phone: <a href="tel:+13136811443">1 (313) 681–1443</a></p>
      <p>Address: PO Box 22801, Beachwood, OH 44122</p>
    </section>
  </main>

  <footer>
    <p>© 2025 CEN Property Management LLC. All rights reserved.</p>
  </footer>
</body>
</html>
