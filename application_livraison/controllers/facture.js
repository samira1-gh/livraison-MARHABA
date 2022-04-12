const nodemailer = require("nodemailer");
const {
     User,
    Command,
    Product,
    CommandProduct,
    facture

} = require("../models/index");
exports.createFacture = async (req, res) => {
  const commandeId = req.params.commandeId;
  const totalPrice = req.body.totalPrix;
  const commande = await Command.findOne(
    { raw: true },
    { where: { id: commandeId } }
  );
    const user = await User.findOne({ where: { id: commande.UserId } });
  const commandePro = await CommandProduct.findAll(
    { raw: true },
    { where: { commandeId: commandeId } }
  );
  console.log(commandePro);
  const product = await Product.findAll(
    { raw: true },
    { where: { id: commandePro.productId } }
  );

  if(!order.status == 'delivered'){
      res.status(400).json({
          message: 'order status its not delivered you cant create facture'
      })
  }
  try {
    const factur = await facture.create({
      totalPrix:req.body.totalPrix,
    //   CommandeId: commandeId,
    });

    console.log(factur);

    let transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      secure: false,
      secureConnection: false, // TLS requires secureConnection to be false
      tls: {
        ciphers: "SSLv3",
      },
      requireTLS: true,
      port: 465,
      service: "outlook",
      debug: true,
      auth: {
        user: `hammimsamira@outlook.com`,
        pass: `SamiraHM`,
      },
    });

    let info = await transporter.sendMail({
      from: '"fullla" hammimsamira@outlook.com',
      to: "hammimsamira@gmail.com",
      subject: "facture de l'ordre",
      text: "test",
      html: `<b>Facture de l'order</b>
                    Here is you  Bill`,
    });

    console.log("here");
    res.status(200).json({
      message: "facture created successfully",
      factur,
    });
  } catch (error) {
    res.send(error);
  }
};
