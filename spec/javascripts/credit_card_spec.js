describe("CreditCard", function() {
    it("cleans the number by removing spaces and dashes", function() {
        expect(CreditCard.cleanNumber("123 4-5")).toEqual("12345");
    });

    it("validates based on mod 10", function () {
        expect(CreditCard.validNumber ("4111 1111 1111-1111")).toBeTruthy();
        expect(CreditCard.validNumber ("4111 1111 1211-1111")).toBeFalsy();
    });

    it("validates when text field loses focus", function() {
        loadFixtures("order_form.html");
        $("#card_number").validateCreditCardNumber();
        $("#card_number").val("123");
        $("#card_number").blur();
        expect($("#card_number_error")).toHaveText("Invalid credit card number.");
    });
});

