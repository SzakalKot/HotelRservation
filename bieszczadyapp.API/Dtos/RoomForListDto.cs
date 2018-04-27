namespace bieszczadyapp.API.Dtos
{
    public class RoomForListDto
    {
         public int RoomId { get; set; }
        public int PerAmount { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool Internet { get; set; }
        public bool tv { get; set; }
        public bool bathroom { get; set; }  
        public bool bussy { get; set; }
    }
}