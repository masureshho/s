var mainDashboard = {
  dashboardRender: function dashboardRender(req, res) {
    console.log("messag e");
    res.render('dashboard/index');
  }
};

module.exports = mainDashboard;