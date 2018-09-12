import React from "react";
import '../style/preload.scss';
import './layout.css';
import * as style from './txn-wrapper.module.scss';
import { TabProvider, Tab, TabPanel, TabList } from 'react-web-tabs';




export default class TransactionWrapperLayoutTxnStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            checked: event.target.checked
        });
    }
    getJavaHTML = () => {
        return {
            __html: `<pre><code class="language-java"><span class="hljs-keyword">import</span> java.io.BufferedReader;
<span class="hljs-keyword">import</span> java.io.DataOutputStream;
<span class="hljs-keyword">import</span> java.io.InputStream;
<span class="hljs-keyword">import</span> java.io.InputStreamReader;
<span class="hljs-keyword">import</span> java.net.HttpURLConnection;
<span class="hljs-keyword">import</span> java.net.URL;
<span class="hljs-keyword">import</span> java.util.TreeMap;

<span class="hljs-keyword">import</span> org.json.JSONObject;

<span class="hljs-keyword">import</span> com.paytm.pg.merchant.CheckSumServiceHelper;
<span class="hljs-keyword">public</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Get_txn_status</span> </span>{
String mid;
String orderid;
String merchant_key;

Get_txn_status(String mid1,String orderid1,String merchant_key)
{	
<span class="hljs-keyword">this</span>.mid=mid1;
<span class="hljs-keyword">this</span>.orderid=orderid1;
<span class="hljs-keyword">this</span>.merchant_key=merchant_key;
}
<span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title">main</span><span class="hljs-params">(String[] arg)</span></span>{
Get_txn_status s1= <span class="hljs-keyword">new</span> Get_txn_status(<span class="hljs-string">"TATAAi73794562338526"</span>,<span class="hljs-string">"5060"</span>,<span class="hljs-string">"6z8Yq2H!LQ75_dx8"</span>);<span class="hljs-comment">// please place your values</span>
s1.checkstatus();	
} 
<span class="hljs-function"><span class="hljs-keyword">public</span> String <span class="hljs-title">checkstatus</span><span class="hljs-params">()</span></span>{
HttpURLConnection connection = <span class="hljs-keyword">null</span>;
TreeMap tmap= <span class="hljs-keyword">new</span> TreeMap();

String checksum;	
<span class="hljs-keyword">try</span>{	
tmap.put(<span class="hljs-string">"MID"</span>, mid); 
tmap.put(<span class="hljs-string">"ORDERID"</span>, orderid);	
}
<span class="hljs-keyword">catch</span>(Exception e)
{
System.out.print(e);
}
String line=<span class="hljs-string">""</span>;

<span class="hljs-keyword">try</span> {	
checksum = CheckSumServiceHelper.getCheckSumServiceHelper().genrateCheckSum(merchant_key,tmap);
<span class="hljs-comment">//	please use your merchant key in above code line</span>
tmap.put(<span class="hljs-string">"CHECKSUMHASH"</span>, checksum);
JSONObject obj = <span class="hljs-keyword">new</span> JSONObject(tmap);
String urlParameters=obj.toString();

URL url = <span class="hljs-keyword">new</span> URL(<span class="hljs-string">"https://securegw.paytm.in/merchant-status/getTxnStatus"</span>);
connection = (HttpURLConnection)url.openConnection();	
connection.setRequestMethod(<span class="hljs-string">"POST"</span>);
connection.setRequestProperty(<span class="hljs-string">"contentType"</span>,<span class="hljs-string">"application/json"</span>);

connection.setUseCaches(<span class="hljs-keyword">false</span>);
connection.setDoOutput(<span class="hljs-keyword">true</span>);
DataOutputStream wr = <span class="hljs-keyword">new</span> DataOutputStream (connection.getOutputStream());
wr.writeBytes(<span class="hljs-string">"JsonData="</span>+urlParameters);	
wr.close();

InputStream is = connection.getInputStream();
BufferedReader rd = <span class="hljs-keyword">new</span> BufferedReader(<span class="hljs-keyword">new</span> InputStreamReader(is));

<span class="hljs-keyword">while</span>((line = rd.readLine()) != <span class="hljs-keyword">null</span>) {

System.out.append(<span class="hljs-string">"Request : "</span>+<span class="hljs-string">"JsonData="</span>+urlParameters+<span class="hljs-string">"

"</span>);

System.out.append(<span class="hljs-string">"output : "</span>+line);
<span class="hljs-comment">// System.out.append('
');</span>

<span class="hljs-keyword">return</span> <span class="hljs-string">"Return"</span>+line;
}
rd.close();


}

<span class="hljs-keyword">catch</span> (Exception e) {
e.printStackTrace();
}

<span class="hljs-keyword">return</span> <span class="hljs-string">"empyty"</span>+line;
}	

}</code></pre>`}
    }

    getCurlHTML = () => {
        return {
            __html: `
<pre><code class="language-bash">curl -X
POST https://securegw.paytm.in/merchant-status/getTxnStatus -H
<span class="hljs-string">'cache-control: no-cache'</span> -H 
<span class="hljs-string">'content-type: application/json'</span> -d 
<span class="hljs-string">'JsonData={"MID":"XXXOPG01851465523919",
"ORDERID":"5362906000",
"CHECKSUMHASH":"CsTeIGhOnegWColuGQaGphMizcsECToTPZ9x/oFPrNZk1TaiV2bFJZzfCwlU7/7ZDbDZIdIfCXfrNjNlFmoUjOMmg8tlR4/0gakLfFNIe2c="}'</span></code></pre>            
            `
        }
    }
    getNetHTML = () => {
        return {
            __html: `
<pre><code class=" language-cs">String <span class="hljs-keyword">value</span> = <span class="hljs-string">"https://securegw-stage.paytm.in/merchant-status/getTxnStatus?JsonData="</span>;

String Merchant_key=<span class="hljs-string">"I%VyKUMWdwEDyh4z"</span>;
String MID=<span class="hljs-string">"PaytmS01829682567544"</span>;
String order_id=<span class="hljs-string">""</span>;

Dictionary innerrequest = <span class="hljs-keyword">new</span> Dictionary();
Dictionary outerrequest = <span class="hljs-keyword">new</span> Dictionary();
innerrequest.Add(<span class="hljs-string">"MID"</span>, MID);
innerrequest.Add(<span class="hljs-string">"ORDERID"</span>, order_id);
String first_jason = <span class="hljs-keyword">new</span> JavaScriptSerializer().Serialize(innerrequest);
<span class="hljs-keyword">try</span>
{
<span class="hljs-keyword">string</span> Check = paytm.CheckSum.generateCheckSum(Merchant_key, innerrequest);
String correct_check = Check.Replace(<span class="hljs-string">"+"</span>, <span class="hljs-string">"%2b"</span>);
innerrequest.Add(<span class="hljs-string">"CHECKSUMHASH"</span>, correct_check);
String final = <span class="hljs-keyword">new</span> JavaScriptSerializer().Serialize(innerrequest);
final = final.Replace(<span class="hljs-string">"\"</span>, <span class="hljs-string">""</span>).Replace(<span class="hljs-string">":"{"</span>, <span class="hljs-string">":{"</span>).Replace(<span class="hljs-string">"}","</span>, <span class="hljs-string">"},"</span>);

String url = <span class="hljs-keyword">value</span> + final; 
HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
request.Headers.Add(<span class="hljs-string">"ContentType"</span>, <span class="hljs-string">"application/json"</span>);
request.Method = <span class="hljs-string">"POST"</span>;
<span class="hljs-keyword">using</span> (StreamWriter requestWriter2 = <span class="hljs-keyword">new</span> StreamWriter(request.GetRequestStream()))
{
requestWriter2.Write(final);

}
<span class="hljs-keyword">string</span> responseData = <span class="hljs-keyword">string</span>.Empty;
<span class="hljs-keyword">using</span> (StreamReader responseReader = <span class="hljs-keyword">new</span> StreamReader(request.GetResponse().GetResponseStream()))
{
responseData = responseReader.ReadToEnd();
Response.Write(responseData);
Response.Write(<span class="hljs-string">"Requested Json= "</span> + final);

}
}
<span class="hljs-keyword">catch</span> (Exception ex)
{
Response.Write(<span class="hljs-string">"Exception message: "</span> + ex.Message.ToString());
}</code></pre>            `
        }
    }

    getPHPHTML = () => {
        return {
            __html: `
            <pre><code class=" language-php"><span class="hljs-meta">&lt;?php</span>
header(<span class="hljs-string">"Pragma: no-cache"</span>);
header(<span class="hljs-string">"Cache-Control: no-cache"</span>);
header(<span class="hljs-string">"Expires: 0"</span>);

<span class="hljs-comment">// following files need to be included</span><span class="hljs-keyword">require_once</span>(<span class="hljs-string">"./lib/config_paytm.php"</span>);
<span class="hljs-keyword">require_once</span>(<span class="hljs-string">"./lib/encdec_paytm.php"</span>);

$ORDER_ID = <span class="hljs-string">""</span>;
$requestParamList = <span class="hljs-keyword">array</span>();
$responseParamList = <span class="hljs-keyword">array</span>();

$requestParamList = <span class="hljs-keyword">array</span>(<span class="hljs-string">"MID"</span> =&gt; PAYTM_MERCHANT_MID , <span class="hljs-string">"ORDERID"</span> =&gt; <span class="hljs-string">"ORDS51973186"</span>); 

$checkSum = getChecksumFromArray($requestParamList,PAYTM_MERCHANT_KEY);
$requestParamList[<span class="hljs-string">'CHECKSUMHASH'</span>] = urlencode($checkSum);

$data_string = <span class="hljs-string">"JsonData="</span>.json_encode($requestParamList);
<span class="hljs-keyword">echo</span> $data_string;

$ch = curl_init(); <span class="hljs-comment">// initiate curl</span>
$url = PAYTM_STATUS_QUERY_URL; <span class="hljs-comment">//Paytm server where you want to post data</span>

curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, <span class="hljs-number">0</span>);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, <span class="hljs-number">0</span>);
curl_setopt($ch, CURLOPT_URL,$url);
curl_setopt($ch, CURLOPT_POST, <span class="hljs-keyword">true</span>); <span class="hljs-comment">// tell curl you want to post something</span>
curl_setopt($ch, CURLOPT_POSTFIELDS,$data_string); <span class="hljs-comment">// define what you want to post</span>
curl_setopt($ch, CURLOPT_RETURNTRANSFER, <span class="hljs-keyword">true</span>); <span class="hljs-comment">// return the output in string format</span>
$headers = <span class="hljs-keyword">array</span>();
$headers[] = <span class="hljs-string">'Content-Type: application/json'</span>;
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
$output = curl_exec($ch); <span class="hljs-comment">// execute</span>
$info = curl_getinfo($ch);

$data = json_decode($output, <span class="hljs-keyword">true</span>);
<span class="hljs-keyword">echo</span> <span class="hljs-string">"&lt;pre&gt;"</span>;
print_r($data);
<span class="hljs-keyword">echo</span> <span class="hljs-string">"&lt;/pre&gt;"</span>;
<span class="hljs-meta">?&gt;</span></code></pre>
            `
        }
    }


    getErrorHTML = () => {
        return {
            __html: `
<pre><code class="hljs language-json">{  
    <span class="hljs-attr">"txnId"</span>: <span class="hljs-string">"20180830111212800100168588734686502"</span>,
    <span class="hljs-attr">"bankTxnId"</span>: <span class="hljs-string">""</span>,
    <span class="hljs-attr">"orderId"</span>: <span class="hljs-string">"myteam11-mt11_828495_1541317094-1"</span>,
    <span class="hljs-attr">"txnAmount"</span>: <span class="hljs-number">1.00</span>,
    <span class="hljs-attr">"status"</span>: <span class="hljs-string">"TXN_FAILURE"</span>,
    <span class="hljs-attr">"txnType"</span>: <span class="hljs-string">"SALE"</span>,
    <span class="hljs-attr">"gatewayName"</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">"respCode"</span>: <span class="hljs-string">"810"</span>,
    <span class="hljs-attr">"respMsg"</span>: <span class="hljs-string">"Closed."</span>,
    <span class="hljs-attr">"bankName"</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">"mid"</span>: <span class="hljs-string">"Myteam59159135078839"</span>,
    <span class="hljs-attr">"paymentMode"</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">"refundAmt"</span>: <span class="hljs-number">0.0</span>,
    <span class="hljs-attr">"txnDate"</span>: <span class="hljs-string">"2018-08-30 12:44:41.0"</span>,
    <span class="hljs-attr">"refundId"</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">"refId"</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">"childTransaction"</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">"subsId"</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">"merchantUniqueReference"</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">"blockedAmount"</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">"preAuthId"</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">"maskedCustomerMobileNumber"</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">"posId"</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">"uniqueReferenceLabel"</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">"uniqueReferenceValue"</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">"pccCode"</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">"prn"</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">"pccCode"</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">"udf1"</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">"udf2"</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">"udf3"</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">"comments"</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">"currentTxnCount"</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">"loyaltyPoints"</span>: <span class="hljs-literal">null</span>
}  </span></code></pre>
            `
        }
    }

    gteSuccessHTML = () => {
        return {
            __html: `
<pre><code class="hljs language-json">{
    <span class="hljs-attr">"TXNID"</span>:<span class="hljs-string">"20180404111212800110168881700011032"</span>,
    <span class="hljs-attr">"BANKTXNID"</span>:<span class="hljs-string">""</span>,
    <span class="hljs-attr">"ORDERID"</span>:<span class="hljs-string">"ORDS51973186"</span>,
    <span class="hljs-attr">"TXNAMOUNT"</span>:<span class="hljs-string">"1000.00"</span>,
    <span class="hljs-attr">"STATUS"</span>:<span class="hljs-string">"TXN_SUCCESS"</span>,
    <span class="hljs-attr">"TXNTYPE"</span>:<span class="hljs-string">"SALE"</span>,
    <span class="hljs-attr">"GATEWAYNAME"</span>:<span class="hljs-string">"WALLET"</span>,
    <span class="hljs-attr">"RESPCODE"</span>:<span class="hljs-string">"01"</span>,
    <span class="hljs-attr">"RESPMSG"</span>:<span class="hljs-string">"Txn Successful."</span>,
    <span class="hljs-attr">"BANKNAME"</span>:<span class="hljs-string">"WALLET"</span>,
    <span class="hljs-attr">"MID"</span>:<span class="hljs-string">"PaytmS01829682567544"</span>,
    <span class="hljs-attr">"PAYMENTMODE"</span>:<span class="hljs-string">"PPI"</span>,
    <span class="hljs-attr">"REFUNDAMT"</span>:<span class="hljs-string">"5.11"</span>,
    <span class="hljs-attr">"TXNDATE"</span>:<span class="hljs-string">"2018-04-04 13:50:31.0"</span>
} </code></pre>
            
            `
        }
    }
    render() {
        return (
            <div className={`${style.apiMain} grid`}>
                <div className={`${style.apiWrapper}`}> {this.props.children} </div>
                <div className={`${style.editorWrapper}`}>
                    <h2>Definition</h2>
                    <p className={` grid justify-between`}><span>Staging:</span> <span>https://securegw-stage.paytm.in/merchant-status/getTxnStatus</span></p>
                    <p className={` grid justify-between`}><span>Production:</span> <span>https://securegw.paytm.in/merchant-status/getTxnStatus </span></p>
                    <h6 className={` grid justify-center align-center`}><span>Request Code</span>
                        <label className={`${style.switch}`}>
                            < input type="checkbox"
                                id="checkbox"
                                onChange={
                                    this.handleChange
                                }
                            />
                            <div className={`${style.slider} ${style.round}`}></div>
                        </label>
                        <span>Response JSON</span>
                    </h6>
                    {!this.state.checked ?
                        <TabProvider defaultTab="one">
                            <TabList>
                                <Tab tabFor="one">CURL</Tab>
                                <Tab tabFor="two">JAVA</Tab>
                                <Tab tabFor="three">.NET</Tab>
                                <Tab tabFor="four">PHP</Tab>
                            </TabList>
                            <TabPanel tabId="one">
                                <span dangerouslySetInnerHTML={this.getCurlHTML()}></span>
                            </TabPanel>
                            <TabPanel tabId="two">
                                <span dangerouslySetInnerHTML={this.getJavaHTML()}></span>
                            </TabPanel>
                            <TabPanel tabId="three">
                                <span dangerouslySetInnerHTML={this.getNetHTML()}></span>
                            </TabPanel>
                            <TabPanel tabId="four">
                                <span dangerouslySetInnerHTML={this.getPHPHTML()}></span>
                            </TabPanel>
                        </TabProvider> : null}
                    {
                        this.state.checked ?
                            <TabProvider defaultTab="success" >
                                <TabList >
                                    <Tab tabFor="success" > Success </Tab> <Tab tabFor="error" > Error </Tab > </TabList> <TabPanel tabId="success" >
                                      <span dangerouslySetInnerHTML= {this.gteSuccessHTML()}></span>
                                </TabPanel> <TabPanel tabId="error" >
                                  <span dangerouslySetInnerHTML={this.getErrorHTML()}></span>
                                </TabPanel>
                            </TabProvider> : null
                    }

                </div>
            </div>


        );
    }
}