
function Account(userName, balance,) {
  this.userName = userName
  this.balance = balance
}

Account.prototype.changeAmount = function (deposit, withdrawal) {
  let amount = deposit - withdrawal
  this.balance += amount
  return this.balance

}

//User logic


$(document).ready(function () {
  $("form#new-account").submit(function (event) {
    event.preventDefault()
    const inputtedUserName = $('input#name').val()
    const inputtedInitialDeposit = parseInt($('input#initial-deposit').val())

    $("input#name").val("")
    $("input#initial-deposit").val("")

    let newAccount = new Account(inputtedUserName, inputtedInitialDeposit)

    $('.user-name').html(newAccount.userName)
    $(".balance").html(newAccount.balance)
    $("#show-balance").show()

    $("form#update-account").submit(function (event) {
      event.preventDefault()
      const inputtedDeposit = parseInt($('input#deposit').val())
      const inputtedWithdrawal = parseInt($('input#withdrawal').val())

      $("input#deposit").val("")
      $("input#withdrawal").val("")
      newAccount.changeAmount(inputtedDeposit, inputtedWithdrawal)
      $('.user-name').html(newAccount.userName)
      $(".balance").html(newAccount.balance)
      $("#show-balance").show()
    })
  })

})