using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web.Http;
using System.Xml;

namespace LightSwitchApplication
{
	public class PubMedController : ApiController
	{
		// GET api/<controller>
		public IEnumerable<string> Get()
		{
			return new string[] { "value1", "value2" };
		}

		// GET api/<controller>/5
		public async Task<HttpResponseMessage> Get(string id)
		{
			HttpClient hc = new HttpClient();
			string xml = await hc.GetStringAsync("http://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=" + id + "&retmode=xml&rettype=abstract");

			XmlDocument doc = new XmlDocument();
			doc.LoadXml(xml);
			doc.RemoveChild(doc.DocumentType);

			StringContent sc = new StringContent(Newtonsoft.Json.JsonConvert.SerializeXmlNode(doc));
			sc.Headers.ContentType = new MediaTypeHeaderValue("application/json");

			HttpResponseMessage resp = new HttpResponseMessage();
			resp.Content = sc;

			return resp;
		}

		// POST api/<controller>
		public void Post([FromBody]string value)
		{
		}

		// PUT api/<controller>/5
		public void Put(int id, [FromBody]string value)
		{
		}

		// DELETE api/<controller>/5
		public void Delete(int id)
		{
		}
	}
}