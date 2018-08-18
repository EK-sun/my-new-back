
import React from 'react'
// import { Layout } from 'antd'
import connect from './modules/connect'
// import LeftNav from './components/LeftNav'
// import BreadCrumb from './components/BreadCrumb'
// const { Header, Content, Footer, Sider } = Layout;

class Admin extends React.Component {
    state = {
        collapsed: false,
    };

    componentDidMount () {
        if(!this.props.commons.menu_config) {
            this.props.commons_actions.get_menu_config()
        }
    }

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

    render() {
        return (
            <div>1234admin</div>
            // <div id="wrapper">
            //     <nav className="navbar navbar-default top-navbar" role="navigation">
            //         <div className="navbar-header">
            //             <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
            //                 <span className="sr-only">Toggle navigation</span>
            //                 <span className="icon-bar"></span>
            //                 <span className="icon-bar"></span>
            //                 <span className="icon-bar"></span>
            //             </button>
            //             <a className="navbar-brand" href="index.html"><i className="fa fa-gear"></i> <strong>HYBRID</strong></a>
            //         </div>

            //         <ul className="nav navbar-top-links navbar-right">
            //             <li className="dropdown">
            //                 <a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
            //                     <i className="fa fa-envelope fa-fw"></i> <i className="fa fa-caret-down"></i>
            //                 </a>
            //                 <ul className="dropdown-menu dropdown-messages">
            //                     <li>
            //                         <a href="#">
            //                             <div>
            //                                 <strong>John Doe</strong>
            //                                 <span className="pull-right text-muted">
            //                                     <em>Today</em>
            //                                 </span>
            //                             </div>
            //                             <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</div>
            //                         </a>
            //                     </li>
            //                     <li className="divider"></li>
            //                     <li>
            //                         <a href="#">
            //                             <div>
            //                                 <strong>John Smith</strong>
            //                                 <span className="pull-right text-muted">
            //                                     <em>Yesterday</em>
            //                                 </span>
            //                             </div>
            //                             <div>Lorem Ipsum has been the industry's standard dummy text ever since an kwilnw...</div>
            //                         </a>
            //                     </li>
            //                     <li className="divider"></li>
            //                     <li>
            //                         <a href="#">
            //                             <div>
            //                                 <strong>John Smith</strong>
            //                                 <span className="pull-right text-muted">
            //                                     <em>Yesterday</em>
            //                                 </span>
            //                             </div>
            //                             <div>Lorem Ipsum has been the industry's standard dummy text ever since the...</div>
            //                         </a>
            //                     </li>
            //                     <li className="divider"></li>
            //                     <li>
            //                         <a className="text-center" href="#">
            //                             <strong>Read All Messages</strong>
            //                             <i className="fa fa-angle-right"></i>
            //                         </a>
            //                     </li>
            //                 </ul>
            //             </li>
            //             <li className="dropdown">
            //                 <a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
            //                     <i className="fa fa-tasks fa-fw"></i> <i className="fa fa-caret-down"></i>
            //                 </a>
            //                 <ul className="dropdown-menu dropdown-tasks">
            //                     <li>
            //                         <a href="#">
            //                             <div>
            //                                 <p>
            //                                     <strong>Task 1</strong>
            //                                     <span className="pull-right text-muted">60% Complete</span>
            //                                 </p>
            //                                 <div className="progress progress-striped active">
            //                                     <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
            //                                         <span className="sr-only">60% Complete (success)</span>
            //                                     </div>
            //                                 </div>
            //                             </div>
            //                         </a>
            //                     </li>
            //                     <li className="divider"></li>
            //                     <li>
            //                         <a href="#">
            //                             <div>
            //                                 <p>
            //                                     <strong>Task 2</strong>
            //                                     <span className="pull-right text-muted">28% Complete</span>
            //                                 </p>
            //                                 <div className="progress progress-striped active">
            //                                     <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="28" aria-valuemin="0" aria-valuemax="100" style="width: 28%">
            //                                         <span className="sr-only">28% Complete</span>
            //                                     </div>
            //                                 </div>
            //                             </div>
            //                         </a>
            //                     </li>
            //                     <li className="divider"></li>
            //                     <li>
            //                         <a href="#">
            //                             <div>
            //                                 <p>
            //                                     <strong>Task 3</strong>
            //                                     <span className="pull-right text-muted">60% Complete</span>
            //                                 </p>
            //                                 <div className="progress progress-striped active">
            //                                     <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
            //                                         <span className="sr-only">60% Complete (warning)</span>
            //                                     </div>
            //                                 </div>
            //                             </div>
            //                         </a>
            //                     </li>
            //                     <li className="divider"></li>
            //                     <li>
            //                         <a href="#">
            //                             <div>
            //                                 <p>
            //                                     <strong>Task 4</strong>
            //                                     <span className="pull-right text-muted">85% Complete</span>
            //                                 </p>
            //                                 <div className="progress progress-striped active">
            //                                     <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 85%">
            //                                         <span className="sr-only">85% Complete (danger)</span>
            //                                     </div>
            //                                 </div>
            //                             </div>
            //                         </a>
            //                     </li>
            //                     <li className="divider"></li>
            //                     <li>
            //                         <a className="text-center" href="#">
            //                             <strong>See All Tasks</strong>
            //                             <i className="fa fa-angle-right"></i>
            //                         </a>
            //                     </li>
            //                 </ul>
            //             </li>
            //             <li className="dropdown">
            //                 <a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
            //                     <i className="fa fa-bell fa-fw"></i> <i className="fa fa-caret-down"></i>
            //                 </a>
            //                 <ul className="dropdown-menu dropdown-alerts">
            //                     <li>
            //                         <a href="#">
            //                             <div>
            //                                 <i className="fa fa-comment fa-fw"></i> New Comment
            //                         <span className="pull-right text-muted small">4 min</span>
            //                             </div>
            //                         </a>
            //                     </li>
            //                     <li className="divider"></li>
            //                     <li>
            //                         <a href="#">
            //                             <div>
            //                                 <i className="fa fa-twitter fa-fw"></i> 3 New Followers
            //                         <span className="pull-right text-muted small">12 min</span>
            //                             </div>
            //                         </a>
            //                     </li>
            //                     <li className="divider"></li>
            //                     <li>
            //                         <a href="#">
            //                             <div>
            //                                 <i className="fa fa-envelope fa-fw"></i> Message Sent
            //                         <span className="pull-right text-muted small">4 min</span>
            //                             </div>
            //                         </a>
            //                     </li>
            //                     <li className="divider"></li>
            //                     <li>
            //                         <a href="#">
            //                             <div>
            //                                 <i className="fa fa-tasks fa-fw"></i> New Task
            //                         <span className="pull-right text-muted small">4 min</span>
            //                             </div>
            //                         </a>
            //                     </li>
            //                     <li className="divider"></li>
            //                     <li>
            //                         <a href="#">
            //                             <div>
            //                                 <i className="fa fa-upload fa-fw"></i> Server Rebooted
            //                         <span className="pull-right text-muted small">4 min</span>
            //                             </div>
            //                         </a>
            //                     </li>
            //                     <li className="divider"></li>
            //                     <li>
            //                         <a className="text-center" href="#">
            //                             <strong>See All Alerts</strong>
            //                             <i className="fa fa-angle-right"></i>
            //                         </a>
            //                     </li>
            //                 </ul>
            //             </li>
            //             <li className="dropdown">
            //                 <a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
            //                     <i className="fa fa-user fa-fw"></i> <i className="fa fa-caret-down"></i>
            //                 </a>
            //                 <ul className="dropdown-menu dropdown-user">
            //                     <li><a href="#"><i className="fa fa-user fa-fw"></i> User Profile</a>
            //                     </li>
            //                     <li><a href="#"><i className="fa fa-gear fa-fw"></i> Settings</a>
            //                     </li>
            //                     <li className="divider"></li>
            //                     <li><a href="#"><i className="fa fa-sign-out fa-fw"></i> Logout</a>
            //                     </li>
            //                 </ul>
            //     </li>
            // </ul>
            //     </nav>
            //     <nav className="navbar-default navbar-side" role="navigation">
            //         <div id="sideNav" href=""><i className="fa fa-caret-right"></i></div>
            //         <div className="sidebar-collapse">
            //             <ul className="nav" id="main-menu">

            //                 <li>
            //                     <a className="active-menu" href="index.html"><i className="fa fa-dashboard"></i> Dashboard</a>
            //                 </li>
            //                 <li>
            //                     <a href="ui-elements.html"><i className="fa fa-desktop"></i> UI Elements</a>
            //                 </li>
            //                 <li>
            //                     <a href="chart.html"><i className="fa fa-bar-chart-o"></i> Charts</a>
            //                 </li>
            //                 <li>
            //                     <a href="tab-panel.html"><i className="fa fa-qrcode"></i> Tabs & Panels</a>
            //                 </li>

            //                 <li>
            //                     <a href="table.html"><i className="fa fa-table"></i> Responsive Tables</a>
            //                 </li>
            //                 <li>
            //                     <a href="form.html"><i className="fa fa-edit"></i> Forms </a>
            //                 </li>


            //                 <li>
            //                     <a href="#"><i className="fa fa-sitemap"></i> Multi-Level Dropdown<span className="fa arrow"></span></a>
            //                     <ul className="nav nav-second-level">
            //                         <li>
            //                             <a href="#">Second Level Link</a>
            //                         </li>
            //                         <li>
            //                             <a href="#">Second Level Link</a>
            //                         </li>
            //                         <li>
            //                             <a href="#">Second Level Link<span className="fa arrow"></span></a>
            //                             <ul className="nav nav-third-level">
            //                                 <li>
            //                                     <a href="#">Third Level Link</a>
            //                                 </li>
            //                                 <li>
            //                                     <a href="#">Third Level Link</a>
            //                                 </li>
            //                                 <li>
            //                                     <a href="#">Third Level Link</a>
            //                                 </li>

            //                             </ul>

            //                         </li>
            //                     </ul>
            //                 </li>
            //                 <li>
            //                     <a href="empty.html"><i className="fa fa-fw fa-file"></i> Empty Page</a>
            //                 </li>
            //             </ul>
            //         </div>
            //     </nav>
            //     <div id="page-wrapper">
            //         <div id="page-inner">


            //             <div className="row">
            //                 <div className="col-md-12">
            //                     <h1 className="page-header">
            //                         Dashboard <small>Summary of your App</small>
            //                     </h1>
            //                     <ol className="breadcrumb">
            //                         <li><a href="#">Home</a></li>
            //                         <li><a href="#">Library</a></li>
            //                         <li className="active">Data</li>
            //                     </ol>
            //                 </div>
            //             </div>

            //             <div className="tlinks">Collect from <a href="http://www.cssmoban.com/" >网页模板</a></div>

            //             <div className="row">
            //                 <div className="col-md-3 col-sm-12 col-xs-12">
            //                     <div className="panel panel-primary text-center no-boder bg-color-green green">
            //                         <div className="panel-left pull-left green">
            //                             <i className="fa fa-eye fa-5x"></i>

            //                         </div>
            //                         <div className="panel-right">
            //                             <h3>8,457</h3>
            //                             <strong> Daily Visits</strong>
            //                         </div>
            //                     </div>
            //                 </div>
            //                 <div className="col-md-3 col-sm-12 col-xs-12">
            //                     <div className="panel panel-primary text-center no-boder bg-color-blue">
            //                         <div className="panel-left pull-left blue">
            //                             <i className="fa fa-shopping-cart fa-5x"></i>
            //                         </div>

            //                         <div className="panel-right">
            //                             <h3>52,160 </h3>
            //                             <strong> Sales</strong>

            //                         </div>
            //                     </div>
            //                 </div>
            //                 <div className="col-md-3 col-sm-12 col-xs-12">
            //                     <div className="panel panel-primary text-center no-boder bg-color-red">
            //                         <div className="panel-left pull-left red">
            //                             <i className="fa fa fa-comments fa-5x"></i>

            //                         </div>
            //                         <div className="panel-right">
            //                             <h3>15,823 </h3>
            //                             <strong> Comments </strong>

            //                         </div>
            //                     </div>
            //                 </div>
            //                 <div className="col-md-3 col-sm-12 col-xs-12">
            //                     <div className="panel panel-primary text-center no-boder bg-color-brown">
            //                         <div className="panel-left pull-left brown">
            //                             <i className="fa fa-users fa-5x"></i>

            //                         </div>
            //                         <div className="panel-right">
            //                             <h3>36,752 </h3>
            //                             <strong>No. of Visits</strong>

            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>

            //             <div className="row">
            //                 <div className="col-md-5">
            //                     <div className="panel panel-default">
            //                         <div className="panel-heading">
            //                             Area Chart
			// 			</div>
            //                         <div className="panel-body">
            //                             <div id="morris-area-chart"></div>
            //                         </div>
            //                     </div>
            //                 </div>

            //                 <div className="col-md-7">
            //                     <div className="panel panel-default">
            //                         <div className="panel-heading">
            //                             Line Chart
			// 			</div>
            //                         <div className="panel-body">
            //                             <div id="morris-line-chart"></div>
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>

            //             <div className="row">
            //                 <div className="col-xs-6 col-md-3">
            //                     <div className="panel panel-default">
            //                         <div className="panel-body easypiechart-panel">
            //                             <h4>Customers</h4>
            //                             <div className="easypiechart" id="easypiechart-blue" data-percent="82" ><span className="percent">82%</span>
            //                             </div>
            //                         </div>
            //                     </div>
            //                 </div>
            //                 <div className="col-xs-6 col-md-3">
            //                     <div className="panel panel-default">
            //                         <div className="panel-body easypiechart-panel">
            //                             <h4>Sales</h4>
            //                             <div className="easypiechart" id="easypiechart-orange" data-percent="55" ><span className="percent">55%</span>
            //                             </div>
            //                         </div>
            //                     </div>
            //                 </div>
            //                 <div className="col-xs-6 col-md-3">
            //                     <div className="panel panel-default">
            //                         <div className="panel-body easypiechart-panel">
            //                             <h4>Profits</h4>
            //                             <div className="easypiechart" id="easypiechart-teal" data-percent="84" ><span className="percent">84%</span>
            //                             </div>
            //                         </div>
            //                     </div>
            //                 </div>
            //                 <div className="col-xs-6 col-md-3">
            //                     <div className="panel panel-default">
            //                         <div className="panel-body easypiechart-panel">
            //                             <h4>No. of Visits</h4>
            //                             <div className="easypiechart" id="easypiechart-red" data-percent="46" ><span className="percent">46%</span>
            //                             </div>
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>

            //             <div className="row">
            //                 <div className="col-md-9 col-sm-12 col-xs-12">
            //                     <div className="panel panel-default">
            //                         <div className="panel-heading">
            //                             Bar Chart Example
            //                 </div>
            //                         <div className="panel-body">
            //                             <div id="morris-bar-chart"></div>
            //                         </div>
            //                     </div>
            //                 </div>
            //                 <div className="col-md-3 col-sm-12 col-xs-12">
            //                     <div className="panel panel-default">
            //                         <div className="panel-heading">
            //                             Donut Chart Example
            //                 </div>
            //                         <div className="panel-body">
            //                             <div id="morris-donut-chart"></div>
            //                         </div>
            //                     </div>
            //                 </div>

            //             </div>
            //             <div className="row">
            //                 <div className="col-md-12">

            //                 </div>
            //             </div>

            //             <div className="row">
            //                 <div className="col-md-4 col-sm-12 col-xs-12">
            //                     <div className="panel panel-default">
            //                         <div className="panel-heading">
            //                             Tasks Panel
            //                 </div>
            //                         <div className="panel-body">
            //                             <div className="list-group">

            //                                 <a href="#" className="list-group-item">
            //                                     <span className="badge">7 minutes ago</span>
            //                                     <i className="fa fa-fw fa-comment"></i> Commented on a post
            //                         </a>
            //                                 <a href="#" className="list-group-item">
            //                                     <span className="badge">16 minutes ago</span>
            //                                     <i className="fa fa-fw fa-truck"></i> Order 392 shipped
            //                         </a>
            //                                 <a href="#" className="list-group-item">
            //                                     <span className="badge">36 minutes ago</span>
            //                                     <i className="fa fa-fw fa-globe"></i> Invoice 653 has paid
            //                         </a>
            //                                 <a href="#" className="list-group-item">
            //                                     <span className="badge">1 hour ago</span>
            //                                     <i className="fa fa-fw fa-user"></i> A new user has been added
            //                         </a>
            //                                 <a href="#" className="list-group-item">
            //                                     <span className="badge">1.23 hour ago</span>
            //                                     <i className="fa fa-fw fa-user"></i> A new user has added
            //                         </a>
            //                                 <a href="#" className="list-group-item">
            //                                     <span className="badge">yesterday</span>
            //                                     <i className="fa fa-fw fa-globe"></i> Saved the world
            //                         </a>
            //                             </div>
            //                             <div className="text-right">
            //                                 <a href="#">More Tasks <i className="fa fa-arrow-circle-right"></i></a>
            //                             </div>
            //                         </div>
            //                     </div>

            //                 </div>
            //                 <div className="col-md-8 col-sm-12 col-xs-12">

            //                     <div className="panel panel-default">
            //                         <div className="panel-heading">
            //                             Responsive Table Example
            //                 </div>
            //                         <div className="panel-body">
            //                             <div className="table-responsive">
            //                                 <table className="table table-striped table-bordered table-hover">
            //                                     <thead>
            //                                         <tr>
            //                                             <th>S No.</th>
            //                                             <th>First Name</th>
            //                                             <th>Last Name</th>
            //                                             <th>User Name</th>
            //                                             <th>Email ID.</th>
            //                                         </tr>
            //                                     </thead>
            //                                     <tbody>
            //                                         <tr>
            //                                             <td>1</td>
            //                                             <td>John</td>
            //                                             <td>Doe</td>
            //                                             <td>John15482</td>
            //                                             <td>name@site.com</td>
            //                                         </tr>
            //                                         <tr>
            //                                             <td>2</td>
            //                                             <td>Kimsila</td>
            //                                             <td>Marriye</td>
            //                                             <td>Kim1425</td>
            //                                             <td>name@site.com</td>
            //                                         </tr>
            //                                         <tr>
            //                                             <td>3</td>
            //                                             <td>Rossye</td>
            //                                             <td>Nermal</td>
            //                                             <td>Rossy1245</td>
            //                                             <td>name@site.com</td>
            //                                         </tr>
            //                                         <tr>
            //                                             <td>4</td>
            //                                             <td>Richard</td>
            //                                             <td>Orieal</td>
            //                                             <td>Rich5685</td>
            //                                             <td>name@site.com</td>
            //                                         </tr>
            //                                         <tr>
            //                                             <td>5</td>
            //                                             <td>Jacob</td>
            //                                             <td>Hielsar</td>
            //                                             <td>Jac4587</td>
            //                                             <td>name@site.com</td>
            //                                         </tr>
            //                                         <tr>
            //                                             <td>6</td>
            //                                             <td>Wrapel</td>
            //                                             <td>Dere</td>
            //                                             <td>Wrap4585</td>
            //                                             <td>name@site.com</td>
            //                                         </tr>

            //                                     </tbody>
            //                                 </table>
            //                             </div>
            //                         </div>
            //                     </div>

            //                 </div>
            //             </div>

            //             <footer><p>Copyright &copy; 2016.Company name All rights reserved.More Templates <a href="http://www.cssmoban.com/" target="_blank" title="模板之家">模板之家</a> - Collect from <a href="http://www.cssmoban.com/" title="网页模板" target="_blank">网页模板</a></p>


            //             </footer>
            //         </div>
            //     </div>
            // </div>
        )
    }
}
export default connect(Admin, 'commons')