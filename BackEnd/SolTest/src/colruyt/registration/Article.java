package colruyt.registration;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Article {
	
    String product;
    Double amount;
    Double unitPrice;
    Double total;
    
    @Id
    String articleId;
    

	public String getArticleId() {
		return articleId;
	}
	public void setArticleId(String articleId) {
		this.articleId = articleId;
	}
	public String getProduct() {
		return product;
	}
	public void setProduct(String product) {
		this.product = product;
	}
	public Double getAmount() {
		return amount;
	}
	public void setAmount(Double amount) {
		this.amount = amount;
	}
	public Double getUnitPrice() {
		return unitPrice;
	}
	public void setUnitPrice(Double unitPrice) {
		this.unitPrice = unitPrice;
	}
	public Double getTotal() {
		return amount * unitPrice;
	}
}
