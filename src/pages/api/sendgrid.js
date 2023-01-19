import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: 'anshubaldeep@gmail.com', // Your email where you'll receive emails
      from: 'brutality2403@gmail.com', // your website email address here
      subject: `You have recieved a New Query - ${req.body.subject}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h2>You've got a new query on "${req.body.subject}" from:</h2> 
              <h4>Name: ${req.body.fullname}</h4> 
              <h4>Email: ${req.body.email} </h4>
              <h4>Message: </h4>
              <h5>${req.body.message}</h5>
              <br>
              <img src="https://ik.imagekit.io/t9vnjnjlba/logo.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674069903036" class="logo-image" style="height: 70px;width: 70px;border-radius: 10px;overflow: hidden;">
              <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards<br>Baldeep Singh<br>Software Developer<br>+91 9582341617</p>
              <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                <a href="https://baldeep-singh.netlify.app/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Website</a>
                <a href="https://github.com/anshubaldeep/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">GitHub</a>
                <a href="https://instagram.com/baldeep.singh.24/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Instagram</a>
                <a href="https://www.linkedin.com/in/baldeep-singh-dev/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">LinkedIn</a>
                <a href="https://twitter.com/bebdev_" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Twitter</a>
                
              </div>
              </div>
      </body>
      </html>`,
    });
    await sendgrid.send({
      to: `${req.body.email}`, // Your email where you'll receive emails
      from: 'anshubaldeep@gmail.com', // your website email address here
      subject: 'You query has been logged!',
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
          <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h4>Hello ${req.body.fullname}, </h4>
              <h4>Your query on '${req.body.subject}' has been logged!</h4>
              <h4>Email: ${req.body.email} </h4>
              <h4>Message: ${req.body.message}</h4>
              <br>
              <h3>Thank you for reaching out!</h3>
              <img src="https://ik.imagekit.io/t9vnjnjlba/logo.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674069903036" class="logo-image" style="height: 70px;width: 70px;border-radius: 10px;overflow: hidden;">
              <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards<br>Baldeep Singh<br>Software Developer<br>+91 9582341617</p>
              <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                <a href="https://baldeep-singh.netlify.app/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Website</a>
                <a href="https://github.com/anshubaldeep/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">GitHub</a>
                <a href="https://instagram.com/baldeep.singh.24/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Instagram</a>
                <a href="https://www.linkedin.com/in/baldeep-singh-dev/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">LinkedIn</a>
                <a href="https://twitter.com/bebdev_" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Twitter</a>
                
              </div>
              </div>
      </body>
      </html>`,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ message: 'Message Sent!' });
}

export default sendEmail;
