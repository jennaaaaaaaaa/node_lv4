// 에러 핸들링 추가 부분.
export default function (err, req, res, next) {
   try {
      console.error(err);
      if (err.name === 'ValidationError') {
         return res.status(400).json({ errorMessage: '데이터 형식이 올바르지 않습니다.' });
      } else if (err.name === 'CastError') {
         return res.status(404).json({ message: '존재 하지 않는 카테고리 입니다.' });
      } else if (err.name === 'menuCastError') {
         return res.status(404).json({ message: '존재하지 않는 메뉴입니다' });
      } else if (err.name === 'LessThenZero') {
         return res.status(404).json({ message: '메뉴 가격은 0보다 작을 수 없습니다' });
      }
      next(err);
   } catch (err) {
      res.status(500).json({ errorMessage: '서버 내부 에러가 발생했습니다.' });
   }
}
