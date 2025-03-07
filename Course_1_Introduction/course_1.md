# Course 1 - Introduction to Front-End Development

1.software engineer is not coding the whole day, but solving problems.
2. the goal is to grow.

## Course syllabus

This course is the first of a series that aims to help you learn more about web development and prepares you for using Bootstrap on a biographical page you will create.  By the end of this course, you’ll be able to:

- Describe the front-end developer role
- Explain the core and underlying technologies that power the internet
- Use HTML to create a simple webpage
- Use CSS to control the appearance of a simple webpage
- Explain what React is
- Describe the applications and characteristics of the most popular UI frameworks

## Module 1

### Networks
- Client <-> server
- Web server is stored in a data center.
- there are all around the word. there are different
- javascript is the powerhouse of the web
- page rendering
- url include the protocol (http) hte domain name and the path to the page.
- request <-> response on the internet
- individuals and companies can pay for web hosting
  - there is shared hosting that you share a server with other websites, which you share the bandwidth, performance and memory which may slow your site.
  - There is VPS (Virtual Server )  with dedicated CPU, memory, and bandwidth resources. It will be running on a hardware server with other VPS instances but as the resources are fixed per VPS instance, your website is unlikely to be impacted by the performance of other VPS instances.
  - And then is dedicated hosting. This will be a hardware server that is dedicated to you only.And is more expensive.
  - The last type of web hosting is something you may have heard of. Cloud hosting and the Cloud has grown in popularity over the last decade and is often mentioned in various news and services you use. With Cloud hosting, your website is run in something called a Cloud environment, which spans across multiple physical and virtual servers. The main advantage of Cloud hosting is that you can use as many resources as you need without hardware limitations. However, you pay based on resource use.

### Introduction to Internet Protocols

#### IP
IPv4 is separated in four groups: 192.168.1.0
IPv6 is 8 groups by 4 digits: xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx

-Ip packages are like mail they need the senders and the recipient address, also include other infos.

#### Transfer Protocols

Firstly, it is a protocol used by web clients and web servers. It works to transfer web resources such as HTML files, and is the foundation of any data exchanges on the web.

- When delivery a data is possible to be damage/corropted or out of order or can lost.and for this we hace transmition protocols (like **TCP** or **UDP**(user datagram protocol)) to solve this issues.
  - TCP is server to device to solve all three of the previously mentioned issues but at the cost of a small delay when sending the data.
  - UDP solves the corrupt packet issue but packets can still arrive out of order or not arrive at all.

#### HTTP and HTTPS

##### 1. Request Line

- Every HTTP request begins with the request line. This consists of the HTTP method, the requested resource and the HTTP protocol version.
- `GET /home.html HTTP/1.1`: In this example, GET is the HTTP method, /home.html is the resource requested and HTTP 1.1 is the protocol used.
- HTTP Methods: HTTP methods indicate the action that the client wishes to perform on the web server resource.

##### 2. HTTP Methods

The HTTP method describes the type of action that the client must performed. The primary or the most commonly used HTTP methods are, GET, POST, PUT, and DELETE.

1. `GET` used to retrieve information from the given server.
1. `POST` request is used to send data to the server.
1. `PUT` method updates whatever currently exists on the web server with something else.
1. `DELETE` method removes the resource.

versions 1.1 and 2.0 are the most common.

##### 3. HTTP Request Headers

After the request line, the HTTP headers are followed by a line break.

There are various possibilities when including an HTTP header in the HTTP request. A header is a case-insensitive name followed by a: and then followed by a value.

##### 4. HTTP Request Body

HTTP requests can optionally include a request body. A request body is often included when using the HTTP POST and PUT methods to transmit data.

```http
POST /users HTTP/1.1
Host: example.com

{
 "key1":"value1",
 "key2":"value2",
 "array1":["value3","value4"]
}
```

##### 5. HTTP Responses

##### 6. Status code

`HTTP/1.1 200 OK` the 200 is could be from 100~599 are grouped by purpose, for ex. 404 is an error not found

###### 6.1. Informational 100~199

– provisional responses sent by the server. These responses are interim before the actual response. The most common information response is 100 continue, which indicates that the web client should continue to request or ignore the response if the request is already finished.

###### 6.2. Successful 200~299

Successful responses indicate that the request was successfully processed by the web server, with the most common success response being 200 OK. The meaning of OK, depends on the HTTP method. If the method is GET, it means that the resource is found and is included in the body of the HTTP response. If it's POST, it means that the resource was successfully transmitted to the web server and if it's PUT, the resource was successfully transmitted to the web server. Finally, if the method is DELETE, it means the resource was deleted.

###### 6.3. Redirectional 300~399

Redirection responses indicate to the web client that the requested resource has been moved to a different path. The most common response codes used are 301 moved permanently and 302 found. The difference between the redirection messages 301 and 302 is that 302 indicates a temporary redirection.The resource has been temporarily moved. When web browsers receive these responses, they will automatically submit the request for the resource at the new path.

###### 6.4. Client Error 400~499

Client error responses indicate that the requests contained bad syntax or content and cannot be processed by the web server. The most common codes used are 400 is used when the web browser or client submitted bad data to the web server, 401 is used to indicate that the user must log into an account before the request can be processed, 403 is used to indicate the request was valid, but that the web server is refusing to process it. This is often used to indicate that a user does not have sufficient permissions to execute an action in a web application, 404 is used to indicate that the request resource was not found on the web server.

###### 6.5. Server Error 500~599

Server error responses indicate that a failure occurred on the web server while trying to process the request. The most common code used is 500 internal server error, which is a generic error status indicating that the server failed to process the request.

##### 7. HTTP Response Headers

Following the status line, there are optional HTTP response headers followed by a line break.

```http
Date: Fri, 11 Feb 2022 15:00:00 GMT+2
Server: Apache/2.2.14 (Linux)
Content-Length: 84
Content-Type: text/html
```

1. The Date header specifies the date and time the HTTP response was generated.
1. The Server header describes the web server software used to generate the response.
1. The Content-Length header describes the length of the response.
1. The Content-Type header describes the media type of the resource returned (e.g. HTML document, image, video).

##### 8. HTTP Response Body

This is the main content of the HTTP response. This can contain images, video, HTML documents and other media types.

```http
HTTP/1.1 200 OK
Date: Fri, 11 Feb 2022 15:00:00 GMT+2
Server: Apache/2.2.14 (Linux)
Content-Length: 84
Content-Type: text/html

<html>
  <head><title>Test</title></head>
  <body>Test HTML page.</body>
</html>
```

##### 9. HTTPS

It is used for secure communication between two computers so that nobody else can see the information being sent and received. It does this by using something called encryption. We won't cover encryption right now. Like in HTTP, the requests and responses still behave in the same way and have the same content. The big difference is that before the content is sent, it is turned into a secret code.

Only the other computer can turn the secret code back into its original content. If someone else was to look at the code, it wouldn't be understandable.

#### Dynamic Host Configuration Protocol (DHCP)

You've learned that computers need IP addresses to communicate with each other. When your computer connects to a network, the Dynamic Host Configuration Protocol or DHCP as it is commonly known, is used to assign your computer an IP address.
Your computer communicates over User Datagram Protocol (UDP) using the protocol with a type of server called a DHCP server. The server keeps track of computers on the network and their IP addresses. It will assign your computer an IP address and respond over the protocol to let it know which IP address to use. Once your computer has an IP address, it can communicate with other computers on the network.

Domain Name System Protocol (DNS)
Your computer needs a way to know with which IP address to communicate when you visit a website in your web browser, for example, meta.com. The Domain Name System Protocol, commonly known as DNS, provides this function. Your computer then checks with the DNS server associated with the domain name and then returns the correct IP address.

#### Domain Name System Protocol (DNS)

Your computer needs a way to know with which IP address to communicate when you visit a website in your web browser, for example, meta.com. The Domain Name System Protocol, commonly known as DNS, provides this function. Your computer then checks with the DNS server associated with the domain name and then returns the correct IP address.

#### Internet Message Access Protocol (IMAP)

Do you check your emails on your mobile or tablet device? Or maybe you use an email application on your computer?
Your device needs a way to download emails and manage your mailbox on the server storing your emails. This is the purpose of the Internet Message Access Protocol or IMAP.

#### Simple Mail Transfer Protocol (SMTP)

Now that your emails are on your device, you need a way to send emails. The Simple Mail Transfer Protocol, or SMTP, is used. It allows email clients to submit emails for sending via an SMTP server. You can also use it to receive emails from an email client, but IMAP is more commonly used.

#### Post Office Protocol (POP)

The Post Office Protocol (POP) is an older protocol used to download emails to an email client. The main difference in using POP instead of IMAP is that POP will delete the emails on the server once they have been downloaded to your local device. Although it is no longer commonly used in email clients, developers often use it to implement email automation as it is a more straightforward protocol than IMAP.

#### File Transfer Protocol (FTP)

When running your websites and web applications on the Internet, you'll need a way to transfer the files from your local computer to the server they'll run on. The standard protocol used for this is the File Transfer Protocol or FTP. FTP allows you to list, send, receive and delete files on a server. Your server must run an FTP Server and you will need an FTP Client on your local machine. You'll learn more about these in a later course.

#### Secure Shell Protocol (SSH)

When you start working with servers, you'll also need a way to log in and interact with the computer remotely. The most common method of doing this is using the Secure Shell Protocol, commonly referred to as SSH. Using an SSH client allows you to connect to an SSH server running on a server to perform commands on the remote computer.
All data sent over SSH is encrypted. This means that third parties cannot understand the data transmitted. Only the sending and receiving computers can understand the data.

#### SSH File Transfer Protocol (SFTP)

The data is transmitted insecurely when using the File Transfer Protocol. This means that third parties may understand the data that you are sending. This is not right if you transmit company files such as software and databases. To solve this, the SSH File Transfer Protocol, alternatively called the Secure File Transfer Protocol, can be used to transfer files over the SSH protocol. This ensures that the data is transmitted securely. Most FTP clients also support the SFTP protocol.

### Webpages, websites and pages

The terms website and web application are often used interchangeably. The key difference between a website, and web application is the level of interactivity, and dynamic content. The easy way to remember this is that a website is more informative and a web application is more interactive.
Web application can be used to create dynamic content, such as a blog or a social media platform. And
web pages at a particular domain make up a website, and that the key difference between websites, and web applications is the level of interactivity, and dynamic content.
