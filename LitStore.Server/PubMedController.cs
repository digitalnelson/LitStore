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
    public class Art
    {
        public string Title { get; set; }
    }

	public class PubMedController : ApiController
	{
		// GET api/<controller>
		public IEnumerable<string> Get()
		{
			return new string[] { "value1", "value2" };
		}

		// GET api/<controller>/5
		public async Task<Art> Get(string id)
		{
            HttpClient hc = new HttpClient();
            string xml = await hc.GetStringAsync("http://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=" + id + "&retmode=xml&rettype=abstract");

            XmlDocument doc = new XmlDocument();
            doc.LoadXml(xml);
            //doc.RemoveChild(doc.DocumentType);

            var title = doc.SelectSingleNode("PubmedArticleSet/PubmedArticle/MedlineCitation/Article/ArticleTitle");

            Art art = new Art();
            art.Title = title.InnerText;

            return art;
		}

		// POST api/<controller>
		public string Post([FromBody]string value)
		{
            return "success";
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