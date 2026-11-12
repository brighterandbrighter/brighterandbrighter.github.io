/* Navigation dropdowns.
   Desktop: opens on hover, keyboard focus, or click/tap. Escape or clicking elsewhere closes it.
   Mobile (under 900px): sub-items are always shown inside the menu, so nothing to toggle. */
(function () {
	var items = document.querySelectorAll('.menu .has-submenu');
	if (!items.length) return;

	function setOpen(li, open) {
		li.classList.toggle('open', open);
		var toggle = li.querySelector('a');
		if (toggle) toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
	}

	function closeAll(except) {
		items.forEach(function (li) {
			if (li !== except) setOpen(li, false);
		});
	}

	items.forEach(function (li) {
		var toggle = li.querySelector('a');
		toggle.addEventListener('click', function (e) {
			e.preventDefault();
			if (window.matchMedia('(max-width: 899px)').matches) return;
			var open = !li.classList.contains('open');
			closeAll(li);
			setOpen(li, open);
		});
	});

	document.addEventListener('click', function (e) {
		if (!e.target.closest('.has-submenu')) closeAll();
	});

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape') closeAll();
	});
})();
