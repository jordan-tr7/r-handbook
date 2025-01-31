
# Creating a Custom ODBC Connection 

--- 

If needed, we can add our own ODBC connection to our computers ODBC list for connecting to SQL servers. To do this we can first search for the `ODBC Data Sources` app on our computer:

![WindowsODBC](figs/odbc_1.png)


Then, once in the app we can click `Add` under the `User DSN` page:

![AddingNewDSN](figs/odbc_2.PNG)


For connections like CXP production, we can choose `SQL Server Native Client 11.0` for the driver, adding whatever name we want for the DSN, then specifying the server to connect to:

**Part 1:**

![DriverType](figs/odbc_3.PNG)

**Part 2:**

![ServerName](figs/odbc_4.PNG)

We can use `Integrated Windows Authentication`, and leave the other options default. 

![WindowsAuth](figs/odbc_5.PNG)

Finally, there's a connection test option to ensure that the ODBC is working correctly:

**Starting Test:**

![StartingTest](figs/odbc_6.PNG)

**Test Complete:**

![TestComplete](figs/odbc_7.PNG)