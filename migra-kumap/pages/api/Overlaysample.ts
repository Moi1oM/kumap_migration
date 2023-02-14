export class Overlay extends google.maps.OverlayView {
  container: HTMLElement;
  pane: keyof google.maps.MapPanes;
  position: google.maps.LatLng | google.maps.LatLngLiteral;

  constructor(
    container: HTMLElement,
    pane: keyof google.maps.MapPanes,
    position: google.maps.LatLng | google.maps.LatLngLiteral
  ) {
    super();
    this.container = container;
    this.pane = pane;
    this.position = position;
  }

  /*-- DOM객체를 만들고 페인의 하위 요소로 추가해야함 --*/
  onAdd(): void {
    //오버레이DOM요소 초기화
    const pane = this.getPanes()?.[this.pane]; //이 OverlayView를 렌더링할 수 있는 창을 반환(null도 반환가능)
    pane?.appendChild(this.container);
  }

  /*-- mapPanes기준으로 요소 배치 --*/
  draw(): void {
    const projection = this.getProjection(); //OverlayView와 연결된 MapCanvasProjection 객체를 반환
    const point = projection.fromLatLngToDivPixel(this.position); //지도의 컨테이너 요소에서 지정된 지리적 위치의 픽셀 좌표를 계산

    if (point === null) {
      return;
    }
    this.container.style.transform = `translate(${point.x}px, ${point.y}px)`;
  }

  /*-- DOM에서 객체를 삭제 --*/
  onRemove(): void {
    if (this.container.parentNode !== null) {
      this.container.parentNode.removeChild(this.container);
    }
  }
}
