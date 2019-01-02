package colruyt.registration;

import java.util.List;
import java.util.UUID;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;


@RequestScoped
@Path("/article")
public class RegistrationArticle {
	@Inject
	ArticleManager articleManager;
	
	@GET
	@Produces(MediaType.APPLICATION_JSON) 
	public List<Article> getArticles() {
		return articleManager.getAllArticles(); 
	}

	@POST 
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON) 
	public List<Article> registerArticle(Article article) {
		if ((article.articleId == null) || (article.articleId.equals(""))) {
			article.articleId = UUID.randomUUID().toString();
			articleManager.saveArticle(article);
		} else {
			articleManager.updateArticle(article);
		}
		return articleManager.getAllArticles();
	}
	
	@DELETE 
	@Produces(MediaType.APPLICATION_JSON)
	@Path("{id}")
	public List<Article> removeAttendee(@PathParam("id") String id) {
		articleManager.removeArticle(id);
        return articleManager.getAllArticles(); 
    }
}
