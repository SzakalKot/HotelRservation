namespace bieszczadyapp.API.Models
{
    public class Room
    {
        public int RoomId { get; set; }
        public RoomType Type { get; set; }
        public string Name { get; set; }
        public int PeronAmount { get; set; }
        public string Description { get; set; }
        public bool Internet { get; set; }
        public bool tv { get; set; }
        public bool bathroom { get; set; }  
        public bool IsEmpty { get; set; }
        public string ImgUrl {get ; set; }
        public decimal Price { get; set;}
 
       
        
    }
    public enum RoomType{
        apart ,
        normal  
    }
    }
