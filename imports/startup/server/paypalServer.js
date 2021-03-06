/**
 * Created by abbeymart on 2017-03-07.
 */

const gateway = braintree.connect({
    accessToken: 'access_token$............'
});

app.get("/client_token", function (req, res) {
    gateway.clientToken.generate({}, function (err, response) {
        res.send(response.clientToken);
    });
});

app.post("/checkout", function (req, res) {
    let nonce = req.body.payment_method_nonce;
    // Use payment method nonce here
});

// let gateway = braintree.connect({
//     accessToken: useYourAccessToken
// });

let saleRequest = {
    amount: req.body.amount,
    merchantAccountId: "USD",
    paymentMethodNonce: req.body.nonce,
    orderId: "Mapped to PayPal Invoice Number",
    descriptor: {
        name: "Descriptor displayed in customer CC statements. 22 char max"
    },
    shipping: {
        firstName: "Jen",
        lastName: "Smith",
        company: "Braintree",
        streetAddress: "1 E 1st St",
        extendedAddress: "5th Floor",
        locality: "Bartlett",
        region: "IL",
        postalCode: "60103",
        countryCodeAlpha2: "US"
    },
    options: {
        paypal: {
            customField: "PayPal custom field",
            description: "Description for PayPal email receipt"
        },
        submitForSettlement: true
    }
};

gateway.transaction.sale(saleRequest, function (err, result) {
    if (err) {
        res.send("<h1>Error:  " + err + "</h1>");
    } else if (result.success) {
        res.send("<h1>Success! Transaction ID: " + result.transaction.id + "</h1>");
    } else {
        res.send("<h1>Error:  " + result.message + "</h1>");
    }
});
