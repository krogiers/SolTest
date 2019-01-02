package colruyt.registration;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import javax.transaction.Transactional;

@ApplicationScoped
public class ArticleManager {
    @PersistenceContext(unitName = "SolTest")
    EntityManager em;
    
    @Transactional
	public List<Article> getAllArticles() {
		CriteriaBuilder cb = em.getCriteriaBuilder(); 
		CriteriaQuery<Article> cq = cb.createQuery(Article.class); 
		Root<Article> rootEntry = cq.from(Article.class); 
		CriteriaQuery<Article> all = cq.select(rootEntry); 
		TypedQuery<Article> allQuery = em.createQuery(all);
		return allQuery.getResultList();
	}
    
    @Transactional
	public void saveArticle(Article article) { 
		em.persist(article);
	}

    @Transactional
	public void updateArticle(Article article) { 
		em.merge(article);
	}

    @Transactional
    public Article removeArticle (String id) {
        Article articleToRemove = em.find(Article.class, id); 
        em.remove(articleToRemove);
        return articleToRemove;
    }
}
