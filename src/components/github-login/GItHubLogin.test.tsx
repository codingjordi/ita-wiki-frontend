import { render, screen } from '@testing-library/react'
import GItHubLogin from './GItHubLogin';


describe('Renderizado inicial', () => {
  it('debe renderizar el botón con el texto correcto', () => {
    render(<GItHubLogin />);
    const texto = screen.getByText(/Sign in with GItHub/i);

    expect(texto).toBeInTheDocument();
  });

  it('debe llamar a la función onClick cuando se hace clic en el botón', () => {
    const onClickMock = jest.fn();
    render(<GItHubLogin onClick={onClickMock} />);

    const boton = screen.getByText(/Sign in with GItHub/i);
    boton.click();

    expect(onClickMock).toHaveBeenCalled();
  });

  it('debe tener los estilos correctos', () => {
    render(<GItHubLogin />);
    const boton = screen.getByRole('button', { name: /Sign in with GitHub/i });



    // Verifica el color de fondo
    expect(boton.style.background).toEqual('rgb(0,0,0)');

    // Verifica el color del texto
    expect(boton.style.color).toBe('rgb(255,255,255)');
    // Verifica el padding (getComputedStyle devuelve en px)
    expect(boton.style.padding).toBe('8px 16px'); // 0.5rem ≈ 8px, 1rem ≈ 16px en la mayoría de los casos

    // Corrige el test de fontSize
    expect(boton.style.fontSize).toBe('16px'); // 1rem suele ser 16px por defecto
  });

});